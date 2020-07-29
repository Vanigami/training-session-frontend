import React from "react";
// import { Redirect } from "react-router-dom";
import WorkoutEdit from "./WorkoutEdit";

import ExercisesContainer from "../containers/ExercisesContainer";

class Workout extends React.Component {
  // state = {
  //   count: 0,
  // };

  // increment = () => {
  //   this.setState({ counter: this.state.counter + 1 },);
  // };
  // let workout = props.workouts[props.match.params.id - 1];
  workout = this.props.workouts.filter(
    (workout) => workout.id == this.props.match.params.id
  )[0];

  render() {
    return (
      <div>
        <h2>
          {this.workout ? this.workout.name : null} -{" "}
          {this.workout ? this.workout.category : null}
        </h2>
        <ExercisesContainer workout={this.workout} />
        <br />
        <h4>Edit Workout</h4>
        <WorkoutEdit workout={this.workout} />
      </div>
    );
  }
}

export default Workout;
