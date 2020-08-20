import React, { Component } from 'react';
import ASSET_CIRCLE_1 from "./assets/circle1.svg";
import ASSET_CIRCLE_2 from "./assets/circle2.svg";
import ASSET_CIRCLE_3 from "./assets/circle3.svg";
import _ from "lodash";

class Background extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     x: 0,
  //     offsetLeftA: 0,
  //     offsetLeftB: 0,
  //     offsetLeftC: 0
  //   };
  // }

  // ####################################################
  // EVENTS
  // ####################################################



  // ####################################################
  // RENDER
  // ####################################################

  render() {
    return (
      <div className="shell-background">
        <img
          src={ASSET_CIRCLE_1}
          style={{
            left: `${this.props.offsetLeftA}px`,
          }}
        />
        <img
          src={ASSET_CIRCLE_2}
          style={{
            left: `${this.props.offsetLeftB}px`,
          }}
        />
        <img
          src={ASSET_CIRCLE_3}
          style={{
            left: `${this.props.offsetLeftC}px`,
          }}
        />
      </div>
    );
  }
}

export default Background;
