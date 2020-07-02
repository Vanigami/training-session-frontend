import React from "react";

const Workout = (props) => {
  console.log(props);
  let workout = props.workouts[props.match.params.id - 1];
  console.log(workout);
  return <li>{workout ? workout.name : null}</li>;
};

export default Workout;
