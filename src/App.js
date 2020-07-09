import React from "react";
import { connect } from "react-redux";
import WorkoutsContainer from "./containers/WorkoutsContainer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <React.Fragment>
          <Router>
            {/* <NavigationBar /> */}
            <Switch>
              <Route exact path="/" component={NavigationBar} />
              <Route path="/workouts" component={WorkoutsContainer} />
              <Route path="/workouts/new" />
            </Switch>
          </Router>
        </React.Fragment>
        {/* <WorkoutsContainer /> */}
      </div>
    );
  }
}
export default App;
