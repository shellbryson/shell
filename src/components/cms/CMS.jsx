import React, { Component } from 'react';
import ReactHtmlParser from "react-html-parser";

// Mallzee Services
import GhostAPI from 'api/GhostAPI';

// Mallzee Components
import Utils from "utils/Utils";
import BusySignal from 'components/busysignal/BusySignal';

class CMS extends Component {
  state = {
    isLoading: true,
    config: {}
  };

  // ####################################################
  // API
  // ####################################################

  fetchContent = () => {
    const api = GhostAPI();
    const filterBySlug = this.state.config.slug;

    // Lets see if we have a cached version of this page we can render
    // immediately while waiting for this fetch...
    this.cacheContentRestore();

    Utils.log(`Page: fetching content [${filterBySlug}]`);

    api.pages
      .browse({
        filter: `slug: ${filterBySlug}`,
        include: "tags"
      })
      .then(page => {
        Utils.log("CMS content loaded", page);
        if (!this.unmounted) {
          // The page comes back as an array, so we need to make sure we only take the first entry;
          const p = page[0];
          if (p && p.title) {
            // Looks like we got a page...
            this.setState({
              isLoading: false,
              title: p.title,
              content: p
            });
            // If we have a callback, call it
            if (this.props.onContentLoaded) {
              this.props.onContentLoaded(p);
            }
            this.cacheContent();
          } else {
            // Doesn't look like page was returned...
            this.setState({
              title: null,
              content: null,
              isLoading: false
            });
            // If we have a callback, call it
            if (this.props.onContentNotLoaded) {
              this.props.onContentNotLoaded();
            }
          }
        }
      })
      .catch(err => {
        Utils.log("CMS failed", err);
        if (!this.unmounted) {
          this.setState({
            isLoading: false
          });
        }
      });
  };

  // ####################################################
  // MIDDLEWARE
  // ####################################################

  cacheContent = () => {
    const pageName = "pageCache__" + this.state.config.slug;
    const pageCache = {
      title: this.state.title,
      content: this.state.content
    };
    Utils.cacheData(pageName, pageCache);
    this.setState({
      cmsCachRefreshed: true
    });
  };

  cacheContentRestore = () => {
    const pageName = "pageCache__" + this.state.config.slug;
    const pageCache = Utils.cacheDataRestore(pageName);
    if (pageCache) {
      this.setState({
        isLoading: false,
        title: pageCache.title,
        content: pageCache.content
      });
      // Provide data to upstream components if needed
      if (this.props.onContentLoaded) {
        this.props.onContentLoaded(pageCache);
      }
    }
  };

  // ####################################################
  // RENDER
  // ####################################################

  renderContent = () => {
    let html = "";
    if (this.state.content) {
      const c = this.state.content;
      let layout = "";
      if (c.tags) {
        if (Utils.hasTag(c.tags, "#lane--split")) {
          layout += " mz-lane--split";
        }
        if (Utils.hasTag(c.tags, "#lane--carousel")) {
          layout += " mz-lane--carousel";
        }
      }
      if (c.feature_image) {
        html += `<div class="mz-lane mz-lane--background ${layout}" style="background-image:url(${c.feature_image})"><div class="mz-lane__inner">${c.html}</div></div>`;
      } else {
        html += c.html;
      }
    }
    return ReactHtmlParser(html);
  };

  render() {
    return (
      <div className={`mz-cms ${this.state.config.classes}`}>
        {this.state.isLoading && <BusySignal />}
        {!this.state.isLoading && this.renderContent()}
      </div>
    );
  }

  // ####################################################
  // LIFECYCLE
  // ####################################################

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.page && nextProps.page.slug) {
      // Only re-fetch if a new page (avoid excessive fetching)
      if (nextProps.page.slug !== this.state.config.slug) {
        this.setState(
          {
            config: nextProps.page
          },
          () => {
            this.fetchContent();
          }
        );
      }
    }
  }

  componentDidMount() {}

  componentWillUnmount() {
    this.unmounted = true;
  }
}

export default CMS;
