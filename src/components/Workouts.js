import React from "react";
import Workout from "./Workout";

const Workouts = (props) => {
  return (
    <div>
      {props.workouts.map((workout) => (
        <li key={workout.id}>
          <Workout workout={workout} />
        </li>
      ))}
    </div>
  );
};

export default Workouts;
