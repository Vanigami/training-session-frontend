import React from "react";
import { Redirect } from "react-router-dom";

const Workout = (props) => {
  console.log(props);

  let workout = props.workouts.filter(
    (workout) => workout.id == props.match.params.id
  )[0];
  console.log(workout);
  return (
    <h2>
      {workout ? workout.name : null} - {workout ? workout.category : null}
    </h2>
  );
};

export default Workout;
