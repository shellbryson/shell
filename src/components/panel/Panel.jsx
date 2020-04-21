import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import CMS from 'components/cms/CMS';

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
            <CMS slug={this.state.slug} />
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
