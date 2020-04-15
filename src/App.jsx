import React, { Component } from "react";
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="shell">
          <header className="shell__header">
            <h1>Shell Bryson</h1>
            <h2>Writer, web engineer</h2>
            <p>Find me on twitter: <a href="https://twitter.com/shellbryson">@shellbryson</a></p>
          </header>
        </div>
      </Router>
    )
  }
}

export default withRouter(App);
