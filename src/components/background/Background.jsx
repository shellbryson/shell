import React, { Component } from 'react';
import ASSET_CIRCLE_1 from "./assets/circle1.svg";

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
      <div className="shell-background">
        <img src={ASSET_CIRCLE_1} />
      </div>
    );
  }

  // ####################################################
  // LIFECYCLE
  // ####################################################

}

export default Background;
