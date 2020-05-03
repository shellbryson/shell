import React, { Component } from 'react';

class Footer extends Component {
  state = { };

  // ####################################################
  // RENDER
  // ####################################################

  render() {

    return (
      <div className="shell-footer">

      </div>
    );
  }

  // ####################################################
  // LIFECYCLE
  // ####################################################

  UNSAFE_componentWillReceiveProps(nextProps) {

  }

  componentDidMount() {

  }

  componentWillUnmount() {
    this.unmounted = true;
  }
}

export default Footer;
