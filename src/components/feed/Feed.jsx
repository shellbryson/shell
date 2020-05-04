import React, { Component } from 'react';
import ReactHtmlParser from "react-html-parser";
import moment from "moment";
import GhostAPI from 'api/GhostAPI';
import Utils from "utils/Utils";
import BusySignal from 'components/busysignal/BusySignal';

class Feed extends Component {
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

    api.posts
      .browse({
        filter: `tag: ${filterBySlug}`,
        include: "tags"
      })
      .then(posts => {
        if (!this.unmounted) {
          if (posts) {
            const p = [];
            posts.forEach((post, i) => {
              const d = moment(post.published_at).format("Do MMM YYYY");
              p.push(
                <div className="shell-feed__entry" key={i}>
                  <h3>
                    {post.title}
                    <span>[{d}]</span>
                  </h3>
                  <div className="shell-feed__content">
                    {ReactHtmlParser(post.html)}
                  </div>
                </div>
              );
            })
            this.setState({
              hasContent: posts.length > 0 ? true : false,
              isLoading: false,
              content: p,
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
  // RENDER
  // ####################################################

  renderContent = () => {
    if (this.state.content) {
      return this.state.content
    }
  };

  render() {
    return (
      <div className="shell-feed">
        {this.state.hasContent && (
          <div className="shell-section">
            <h2>Updates</h2>
          </div>
        )}
        {this.state.isLoading && <BusySignal isLarge />}
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

export default Feed;
