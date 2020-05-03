import React, { Component } from "react";
import {
  withRouter,
  NavLink,
} from "react-router-dom";

class NavigationTabs extends Component {

  render() {
    return (
      <nav className="shell-navigationtabs">
        <div className="shell-navigationtabs__nav">
          <NavLink to="/writer" className="shell-button">
            Writer
          </NavLink>
          <NavLink to="/engineer" className="shell-button">
            Engineer
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default withRouter(NavigationTabs);
