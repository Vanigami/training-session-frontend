import React from "react";
import { connect } from "react-redux";
import WorkoutsContainer from "./containers/WorkoutsContainer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import WorkoutInput from "./components/WorkoutInput";
import Home from "./components/Home";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/workouts" component={WorkoutsContainer} />
            <Route path="/workouts/new" component={WorkoutInput} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
