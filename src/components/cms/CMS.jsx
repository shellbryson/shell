import React, { Component } from 'react';
import ReactHtmlParser from "react-html-parser";
import GhostAPI from 'api/GhostAPI';
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
    const filterBySlug = this.state.slug;

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
          } else {
            // Doesn't look like page was returned...
            this.setState({
              title: null,
              content: null,
              isLoading: false
            });
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

  // ####################################################
  // RENDER
  // ####################################################

  renderTitle = () => {
    if (this.state.content) {
      return (
        <h1>{this.state.content.title}</h1>
      );
    }
  };

  renderContent = () => {
    if (this.state.content) {
      return ReactHtmlParser(this.state.content.html);
    }
  };

  render() {
    return (
      <div className={`mz-cms ${this.state.config.classes}`}>
        {this.state.isLoading && <BusySignal />}
        {!this.state.isLoading && this.renderTitle()}
        {!this.state.isLoading && this.renderContent()}
      </div>
    );
  }

  // ####################################################
  // LIFECYCLE
  // ####################################################

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.slug) {
      // Only re-fetch if a new page (avoid excessive fetching)
      if (nextProps.slug !== this.state.slug) {
        this.setState(
          {
            slug: nextProps.slug
          },
          () => {
            this.fetchContent();
          }
        );
      }
    }
  }

  componentDidMount() {
    if (this.props.slug) {
      this.setState(
        {
          slug: this.props.slug,
        },
        () => {
          this.fetchContent();
        }
      );
    }
  }

  componentWillUnmount() {
    this.unmounted = true;
  }
}

export default CMS;
