import React, { Component } from 'react';
import NavigationTabs from "components/navigationtabs/NavigationTabs";

// Assets
import PROFILE_IMAGE from "./assets/profile.png";
import SOCIAL_GIT from "./assets/github.svg";
import SOCIAL_TWITTER from "./assets/twitter.svg";
import SOCIAL_PINTEREST from "./assets/pinterest.svg";

class Bio extends Component {
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

  renderSocial = () => {
    return (
      <div className="shell-bio__social">
        <a
          href="https://twitter.com/shellbryson"
          className="shell-bio__social-icon"
        >
          <img src={SOCIAL_TWITTER} alt="Twitter icon" />
        </a>
        <a
          href="https://www.pinterest.co.uk/stbrysonwriter/"
          className="shell-bio__social-icon"
        >
          <img src={SOCIAL_PINTEREST} alt="Pinterest icon" />
        </a>
        <a
          href="https://github.com/shellbryson"
          className="shell-bio__social-icon"
        >
          <img src={SOCIAL_GIT} alt="Github icon" />
        </a>
      </div>
    );
  }

  renderProfile = () => {
    return (
      <div className="shell-bio__section">
        <h2>Social links</h2>
        <div className="shell-bio__profile">
          <div
            className="shell-bio__avatar"
            style={{ backgroundImage: `url(${PROFILE_IMAGE})` }}
          ></div>
          {this.renderSocial()}
        </div>
      </div>
    );
  }

  render() {
    return (
      <header className="shell-bio">
        <h1>Shell Bryson</h1>
        <h2>Writer, web engineer</h2>
        <p>
          Find me on twitter:{" "}
          <a href="https://twitter.com/shellbryson">@shellbryson</a>
        </p>
        <NavigationTabs />
        { this.renderProfile() }
      </header>
    );
  }

  // ####################################################
  // LIFECYCLE
  // ####################################################

}

export default Bio;
