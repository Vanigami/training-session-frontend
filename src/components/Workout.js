import React from "react";

const Workout = (props) => {
  console.log(props);
  return (
    <li>
      {props.workout.name} - {props.workout.category}
    </li>
  );
};

export default Workout;
