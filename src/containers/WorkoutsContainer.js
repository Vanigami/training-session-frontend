import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { fetchWorkouts } from "../actions/fetchWorkouts";
import Workouts from "../components/Workouts";
import Workout from "../components/Workout";
import WorkoutInput from "../components/WorkoutInput";

class WorkoutsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchWorkouts();
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path="/workout/new" component={WorkoutInput} />
          <Route
            path="/workout/:id"
            render={(routerProps) => (
              <Workout {...routerProps} workouts={this.props.workouts} />
            )}
          />
          <Route
            path="/workouts"
            render={(routerProps) => (
              <Workouts {...routerProps} workouts={this.props.workouts} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    workouts: state.workouts,
  };
};

export default connect(mapStateToProps, { fetchWorkouts })(WorkoutsContainer);
