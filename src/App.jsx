import React, { Component } from "react";
import { BrowserRouter as Router, withRouter, Route, Switch, Redirect } from 'react-router-dom';
import Bio from "components/bio/Bio";
import Panel from "components/panel/Panel";
import Background from "components/background/Background";

class App extends Component {

  state = {
    x: 0,
    offsetLeftA: 0,
    offsetLeftB: 0,
    offsetLeftC: 0
  };


  onBGMove = (e) => {
    const currentX = this.state.currentX;
    const newX = e.screenX;
    let offsetLeftA = this.state.offsetLeftA;
    let offsetLeftB = this.state.offsetLeftB;
    let offsetLeftC = this.state.offsetLeftC;

    if (newX > currentX) {
      offsetLeftA -= 5;
      offsetLeftB -= 7;
      offsetLeftC -= 8;

      if (offsetLeftA < -100) {
        offsetLeftA = -100;
      }
      if (offsetLeftB < -130) {
        offsetLeftB = -130;
      }
      if (offsetLeftC < -150) {
        offsetLeftC = -150;
      }
    }

    if (newX < currentX) {
      offsetLeftA += 5;
      offsetLeftB += 7;
      offsetLeftC += 8;

      if (offsetLeftA > 100) {
        offsetLeftA = 100;
      }
      if (offsetLeftB > 130) {
        offsetLeftB = 130;
      }
      if (offsetLeftC > 150) {
        offsetLeftC = 150;
      }
    }

    this.setState({
      currentX: e.screenX,
      offsetLeftA: offsetLeftA,
      offsetLeftB: offsetLeftB,
      offsetLeftC: offsetLeftC,
    });
  };

  render() {
    return (
      <Router>
        <div className="shell" onMouseMove={this.onBGMove.bind(this)}>
          <div className="shell__ui">
            <Bio />
            <Switch>
              <Route
                path="/writer"
                exact
                render={(props) => <Panel slug="writer" {...props} />}
              ></Route>
              <Route
                path="/social"
                exact
                render={(props) => <Panel slug="social" {...props} />}
              ></Route>
              <Route
                path="/bio"
                exact
                render={(props) => <Panel slug="bio" {...props} />}
              ></Route>
              <Route
                path="/engineer"
                exact
                render={(props) => <Panel slug="engineer" {...props} />}
              ></Route>
              <Redirect to="/writer" />
            </Switch>
          </div>
        </div>
        <Background
          offsetLeftA={this.state.offsetLeftA}
          offsetLeftB={this.state.offsetLeftB}
          offsetLeftC={this.state.offsetLeftC}
        />
      </Router>
    );
  }
}

export default withRouter(App);
