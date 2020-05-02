import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

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
        Footer
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
