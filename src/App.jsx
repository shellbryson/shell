import React, { Component } from "react";
import { BrowserRouter as Router, withRouter, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import Bio from "components/bio/Bio";
import Panel from "components/panel/Panel";

class App extends Component {

  render() {
    return (
      <Router>
        <div className="shell">
          <Bio />
          <Switch>
            <Route
              path="/writer"
              exact
              render={(props) => <Panel slug="writer" {...props} />}
            ></Route>
            <Route
              path="/engineer"
              exact
              render={(props) => <Panel slug="engineer" {...props} />}
            ></Route>
            <Redirect to="/writer" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default withRouter(App);
