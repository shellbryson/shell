import React, { Component } from 'react';
// import { NavLink } from "react-router-dom";

import Shatter from "components/shatter/Shatter";

class Footer extends Component {
  state = {

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
      <div className="shell-footer">
        <Shatter />
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
