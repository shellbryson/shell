import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import CMS from 'components/cms/CMS';
import TwitterFeed from 'components/twitterfeed/TwitterFeed';

class Panel extends Component {
  state = {
    isLoading: true,
    config: {}
  };

  // ####################################################
  // API
  // ####################################################

  // ####################################################
  // MIDDLEWARE
  // ####################################################

  // ####################################################
  // RENDER
  // ####################################################

  renderHeader = () => {
    return (
      <>
        <div className="shell-panel__title">{this.state.slug}</div>
        <div className="shell-panel__actions">
          <NavLink className="shell-panel__action" to="/writer">
            Writer
          </NavLink>
          <NavLink className="shell-panel__action" to="/engineer">
            Engineer
          </NavLink>
          <NavLink className="shell-panel__action" to="/social">
            Social
          </NavLink>
          <NavLink className="shell-panel__action" to="/bio">
            Bio
          </NavLink>
        </div>
      </>
    );
  }

  renderFooter = () => {
    return (
      <div className="shell-panel__footer-inner">

      </div>
    )
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
        page = <CMS slug={this.state.slug} />;
    }
    return page;
  }

  render() {

    return (
      <div className="shell-panel">
        <div className="shell-panel__header">{this.renderHeader()}</div>
        <div className="shell-panel__content">{this.renderContent()}</div>
        <div className="shell-panel__footer">{this.renderFooter()}</div>
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
