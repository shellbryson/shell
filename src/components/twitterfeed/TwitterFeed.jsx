import React, { Component } from 'react';
import BusySignal from 'components/busysignal/BusySignal';

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
          className="twitter-timeline"
          data-theme="dark"
          href="https://twitter.com/shellbryson?ref_src=twsrc%5Etfw"
        >
          <div className="shell-twitterfeed__loading">
            <div className="shell-twitterfeed__busy">
              <BusySignal small />
            </div>
            <div className="shell-twitterfeed__message">
              <div>Loading Tweets from @shellbryson...</div>
              <div>Not loading? Click to open twitter.com/shellbryson</div>
            </div>
          </div>
        </a>
      </div>
    );
  }

  // ####################################################
  // LIFECYCLE
  // ####################################################

}

export default TwitterFeed;
