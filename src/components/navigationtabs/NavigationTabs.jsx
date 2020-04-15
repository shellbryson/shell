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
          <NavLink to="/writer" className="shell-navigationtabs__link">
            Writer
          </NavLink>
          <NavLink to="/engineer" className="shell-navigationtabs__link">
            Engineer
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default withRouter(NavigationTabs);
