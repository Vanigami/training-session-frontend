import React from "react";
import { Route, Link } from "react-router-dom";
import Workout from "./Workout";
import "../App.css";

const Workouts = (props) => {
  return (
    <div>
      {props.workouts.map((workout) => (
        <li class="a" key={workout.category}>
          <Link to={`/workouts/${workout.category}`}>
            {workout.name} - {workout.category}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Workouts;
