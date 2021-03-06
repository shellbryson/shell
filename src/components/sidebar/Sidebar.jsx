import React, { Component } from 'react';

class Sidebar extends Component {
  state = { };

  // ####################################################
  // RENDER
  // ####################################################

  render() {

    return (
      <div className="shell-sidebar">
        {this.props.children}
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
