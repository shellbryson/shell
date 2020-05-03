import React, { Component } from 'react';
// import { NavLink } from "react-router-dom";
// import CMS from 'components/cms/CMS';

import Shatter from "components/shatter/Shatter";

class Sidebar extends Component {
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
      <div className="shell-sidebar">
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

export default Sidebar;
