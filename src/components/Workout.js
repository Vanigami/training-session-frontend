import React from "react";
import { Redirect } from "react-router-dom";

const Workout = (props) => {
  console.log(props);

  let workout = props.workouts.filter(
    (workout) => workout.id == props.match.params.id
  )[0];
  console.log(workout);
  return (
    <li>
      {workout ? workout.name : null} - {workout ? workout.category : null}
    </li>
  );
};

export default Workout;
