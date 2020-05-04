import React, { Component } from 'react';

class Shatter extends Component {
  state = {

  };

  // ####################################################
  // EVENTS
  // ####################################################

  onHover = e => {
    this.setState({
      active: true
    })
  }

  onOut = e => {
    this.setState({
      active: false
    })
  }

  // ####################################################
  // RENDER
  // ####################################################

  render() {

    return (
      <div
        className={`shell-shatter ${this.state.active ? "" : "over"}`}
        onMouseOver={this.onHover.bind(this)}
        onMouseLeave={this.onOut.bind(this)}
      >
        <div className="l l1"></div>
        <div className="l l2"></div>
        <div className="l l3"></div>
        <div className="l l4"></div>
        <div className="l l5"></div>
        <div className="l l6"></div>
        <div className="l l7"></div>
        <div className="l l8"></div>
        <div className="l l9"></div>
        <div className="l l10"></div>
        <div className="l l11"></div>
        <div className="l l12"></div>
        <div className="l l13"></div>
        <div className="l l14"></div>
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

export default Shatter;
