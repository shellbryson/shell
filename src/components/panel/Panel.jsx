import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
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

  renderContent = () => {
    let page;
    switch (this.state.slug) {
      case "social":
        page = <TwitterFeed />
        break;
      default:
        page = <CMS slug={this.state.slug} />;
    }
    return page;
  }

  render() {

    return (
      <div className="shell-panel">
        <CSSTransitionGroup
          transitionAppear
          transitionName="reveal"
          transitionAppearTimeout={250}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          <div className="shell-panel__content">
            {this.renderContent()}
          </div>
        </CSSTransitionGroup>
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
