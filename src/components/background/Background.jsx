import React, { Component } from 'react';

import BG1 from "./assets/BG1.jpg";
// import BG2 from "./assets/BG2.jpg";

class Background extends Component {
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
      <div
        className="shell-background"
        style={{backgroundImage: `url(${BG1})`}}
      >
      </div>
    );
  }

  // ####################################################
  // LIFECYCLE
  // ####################################################

}

export default Background;
