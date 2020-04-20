import React, { Component } from 'react';

class BusySignal extends Component {
  state = {};

  render() {
    const cssClass = this.props.cssClass || "";
    const isSmall = this.props.small ? "shell-busysignal--small" : "";
    const signal = (
      <div className="shell-busysignal__signal">
        <svg className="spinner" viewBox="0 0 50 50">
          <circle
            className="path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="5"
          />
        </svg>
      </div>
    );
    let spinner;

    if (this.props.message) {
      spinner = (
        <>
          <div className="shell-busymessage">
            <p>{this.props.message}</p>
          </div>
          <div className={`shell-busysignal shell-busysignal--message ${isSmall} ${cssClass}`}>
            {signal}
          </div>
        </>
      );
    } else {
      spinner = (
        <>
          <div className={`shell-busysignal ${isSmall} ${cssClass}`}>{signal}</div>
        </>
      );
    }
    return spinner;
  }
}

export default BusySignal;
