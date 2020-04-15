import React, { Component } from 'react';
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
        <CMS slug={this.state.slug} />
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
            slug: nextProps.slug
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
        }
      );
    }
  }

  componentWillUnmount() {
    this.unmounted = true;
  }
}

export default Panel;
