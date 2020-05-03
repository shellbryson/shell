import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenFancy } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";

import CMS from 'components/cms/CMS';
import Feed from 'components/feed/Feed';
import TwitterFeed from 'components/twitterfeed/TwitterFeed';
import Sidebar from 'components/sidebar/Sidebar';
import Footer from 'components/footer/Footer';

class Panel extends Component {
  state = {
    isLoading: true,
    config: {}
  };

  // ####################################################
  // RENDER
  // ####################################################

  renderHeader = () => {
    return (
      <>
        <div className="shell-panel__title"></div>
        <div className="shell-panel__actions">
          <NavLink className="shell-button" to="/writer">
            Writer <FontAwesomeIcon icon={faPenFancy} />
          </NavLink>
          <NavLink className="shell-button" to="/engineer">
            Engineer <FontAwesomeIcon icon={faCode} />
          </NavLink>
          <NavLink className="shell-button" to="/social">
            Social <FontAwesomeIcon icon={faCommentAlt} />
          </NavLink>
          <NavLink className="shell-button" to="/bio">
            Bio <FontAwesomeIcon icon={faUserAlt} />
          </NavLink>
        </div>
      </>
    );
  }

  renderContent = () => {
    let page;
    switch (this.state.slug) {
      case "social":
        page = (
          <>
            <CMS slug={this.state.slug} />
            <TwitterFeed />
          </>
        );
        break;
      default:
        page = (
          <>
            <CMS slug={this.state.slug} />
            <Feed slug={this.state.slug} />
          </>
        );
    }
    return page;
  }

  render() {

    return (
      <div className="shell-panel">
        <div className="shell-panel__header">{this.renderHeader()}</div>
        <div className="shell-panel__split">
          <div className="shell-panel__content">{this.renderContent()}</div>
          <div className="shell-panel__sidebar">
            <Sidebar />
          </div>
        </div>
        <div className="shell-panel__footer">
          <Footer />
        </div>
      </div>
    );
  }

  // ####################################################
  // LIFECYCLE
  // ####################################################

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.slug) {
      if (nextProps.slug !== this.state.slug) {
        this.setState(
          {
            slug: nextProps.slug,
            animate: true
          }
        );
      }
    }
  }

  componentDidMount() {
    if (this.props.slug) {
      this.setState({
        animate: true,
        slug: this.props.slug,
      });
    }
  }

  componentWillUnmount() {
    this.unmounted = true;
  }
}

export default Panel;
