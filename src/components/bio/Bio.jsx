import React, { Component } from 'react';
import NavigationTabs from "components/navigationtabs/NavigationTabs";

// Assets
import PROFILE_IMAGE from "./assets/profile.png";
import SOCIAL_GIT from "./assets/github.svg";
import SOCIAL_TWITTER from "./assets/twitter.svg";
import SOCIAL_PINTEREST from "./assets/pinterest.svg";
import SOCIAL_LINKEDIN from "./assets/linkedin.svg";
import Utils from 'utils/Utils';

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
          href="https://www.linkedin.com/in/shellbryson/n"
          className="shell-bio__social-icon"
        >
          <img src={SOCIAL_LINKEDIN} alt="LinkedIn icon" />
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
      <>
        <div className="shell-bio__section-title">
          Social links
        </div>
        <div className="shell-bio__section">
          <div className="shell-bio__profile">
            <div
              className="shell-bio__avatar"
              style={{ backgroundImage: `url(${PROFILE_IMAGE})` }}
            ></div>
            {this.renderSocial()}
          </div>
        </div>
      </>
    );
  }

  renderVersion = () => {
    const d = new Date();
    return (
      <div className="shell-bio__version">
        <span>{Utils.version()}</span>|
        <span>© {d.getFullYear()} Shell Bryson</span>
      </div>
    );
  }

  render() {
    return (
      <header className="shell-bio">
        <div className="shell-bio__section-title">Profile</div>
        <div className="shell-bio__section">
          <h1>Shell Bryson</h1>
          <h2>Writer, web engineer</h2>
        </div>
        <NavigationTabs />
        {this.renderProfile()}
        {this.renderVersion()}
      </header>
    );
  }

  // ####################################################
  // LIFECYCLE
  // ####################################################

}

export default Bio;
