import React from "react";

import ExercisesContainer from "../containers/ExercisesContainer";
import { Redirect } from "react-router-dom";
debugger;
const Workout = (props) => {
  debugger;
  // let workout = props.workouts[props.match.params.id - 1];
  let workout = props.workouts.filter(
    (workout) => workout.id == props.match.params.id
  )[0];
  console.log(workout);
  return (
    <div>
      <h2>
        {workout ? workout.name : null} - {workout ? workout.category : null}
      </h2>
      <ExercisesContainer workout={workout} />
    </div>
  );
};

export default Workout;
