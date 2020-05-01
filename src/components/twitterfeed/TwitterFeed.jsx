import React, { Component } from 'react';

// import BG1 from "./assets/BG1.jpg";
// import BG2 from "./assets/BG2.jpg";

class TwitterFeed extends Component {
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
      <div className="shell-twitterfeed">
        <a
          class="twitter-timeline"
          data-theme="dark"
          href="https://twitter.com/shellbryson?ref_src=twsrc%5Etfw"
        >
          Tweets by shellbryson
        </a>
      </div>
    );
  }

  // ####################################################
  // LIFECYCLE
  // ####################################################

}

export default TwitterFeed;
