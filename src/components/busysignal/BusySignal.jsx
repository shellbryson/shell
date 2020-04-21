import React, { Component } from 'react';

class BusySignal extends Component {
  state = {};

  render() {
    return (
      <div className="shell-busysignal">
        <div className={`shell-busysignal__signal ${this.props.isLarge ? "shell-busysignal__signal--large" : ""}`}>
          <div className="sk-cube sk-cube1"></div>
          <div className="sk-cube sk-cube2"></div>
          <div className="sk-cube sk-cube3"></div>
          <div className="sk-cube sk-cube4"></div>
          <div className="sk-cube sk-cube5"></div>
          <div className="sk-cube sk-cube6"></div>
          <div className="sk-cube sk-cube7"></div>
          <div className="sk-cube sk-cube8"></div>
          <div className="sk-cube sk-cube9"></div>
        </div>
      </div>
    );
  }
}

export default BusySignal;
