import React, { Component } from "react";
import { BrowserRouter as Router, withRouter, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import CMS from "components/cms/CMS";
import NavigationTabs from "components/navigationtabs/NavigationTabs";

class App extends Component {

  render() {
    return (
      <Router>
        <div className="shell">
          <header className="shell__header">
            <h1>Shell Bryson</h1>
            <h2>Writer, web engineer</h2>
            <p>
              Find me on twitter:
               <a href="https://twitter.com/shellbryson">@shellbryson</a>
            </p>
            <NavigationTabs />
          </header>
          <div className="shell__content">
            <Switch>
              <Route
                path="/writer"
                exact
                render={(props) => <CMS slug="writer" {...props} />}
              ></Route>
              <Route
                path="/engineer"
                exact
                render={(props) => <CMS slug="engineer" {...props} />}
              ></Route>
              <Redirect to="/writer" />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default withRouter(App);
