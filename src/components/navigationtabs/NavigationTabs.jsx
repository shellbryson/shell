import React, { Component } from "react";
import {
  withRouter,
  NavLink,
} from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenFancy } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

class NavigationTabs extends Component {

  render() {
    return (
      <nav className="shell-navigationtabs">
        <div className="shell-navigationtabs__nav">
          <NavLink to="/writer" className="shell-button">
            Writer <FontAwesomeIcon icon={faPenFancy} />
          </NavLink>
          <NavLink to="/engineer" className="shell-button">
            Engineer <FontAwesomeIcon icon={faCode} />
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default withRouter(NavigationTabs);
