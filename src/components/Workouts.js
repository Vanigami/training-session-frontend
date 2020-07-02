import React from "react";
import { Route, Link } from "react-router-dom";
import Workout from "./Workout";

const Workouts = (props) => {
  return (
    <div>
      {props.workouts.map((workout) => (
        <div key={workout.id}>
          <Link to={`/workouts/${workout.id}`}>{workout.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Workouts;
