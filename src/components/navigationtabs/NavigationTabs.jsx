import React, { Component } from "react";
import {
  withRouter,
  NavLink,
} from "react-router-dom";

class NavigationTabs extends Component {

  render() {
    return (
      <nav>
        <div>
          <NavLink to="/writer">Writer</NavLink>
          <NavLink to="/engineer">Engineer</NavLink>
        </div>
      </nav>
    );
  }
}

export default withRouter(NavigationTabs);
