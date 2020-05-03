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
        class={`shell-shatter ${this.state.active ? "" : "over"}`}
        onMouseOver={this.onHover.bind(this)}
        onMouseLeave={this.onOut.bind(this)}
      >
        <div class="l l1"></div>
        <div class="l l2"></div>
        <div class="l l3"></div>
        <div class="l l4"></div>
        <div class="l l5"></div>
        <div class="l l6"></div>
        <div class="l l7"></div>
        <div class="l l8"></div>
        <div class="l l9"></div>
        <div class="l l10"></div>
        <div class="l l11"></div>
        <div class="l l12"></div>
        <div class="l l13"></div>
        <div class="l l14"></div>
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
