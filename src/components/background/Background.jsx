import React, { Component } from 'react';

// import BG1 from "./assets/BG1.jpg";
 import BG2 from "./assets/BG1.png";

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
    // return (
    //   <div className="shell-background"></div>
    // );
    return (
      <div
        className="shell-background"
        style={{backgroundImage: `url(${BG2})`}}
      >
      </div>
    );
  }

  // ####################################################
  // LIFECYCLE
  // ####################################################

}

export default Background;
