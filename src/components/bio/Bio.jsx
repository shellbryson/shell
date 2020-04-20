import React, { Component } from 'react';
import NavigationTabs from "components/navigationtabs/NavigationTabs";

class Panel extends Component {
  state = {};

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
      <header className="shell-bio">
        <h1>Shell Bryson</h1>
        <h2>Writer, web engineer</h2>
        <p>
          Find me on twitter:{" "}
          <a href="https://twitter.com/shellbryson">@shellbryson</a>
        </p>
        <NavigationTabs />
      </header>
    );
  }

  // ####################################################
  // LIFECYCLE
  // ####################################################

}

export default Panel;
