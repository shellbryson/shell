import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import CMS from 'components/cms/CMS';

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
        Sidebar
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
