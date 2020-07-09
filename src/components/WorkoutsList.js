import React from "react";
import Workouts from "./Workouts";

import Workout from "./Workout";

const WorkoutsList = (props) => {
  return (
    <div>
      {props.workouts.map((w) => (
        <Workout key={w.id} name={w.name} />
      ))}
    </div>
  );
};
export default WorkoutsList;
