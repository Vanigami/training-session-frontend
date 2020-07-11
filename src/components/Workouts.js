import React from "react";
import { Route, Link } from "react-router-dom";
import Workout from "./Workout";

import "../App.css";

const Workouts = (props) => {
  return (
    <div>
      <div className="workout">
        {props.workouts.map((workout) => (
          <li key={workout.id}>
            <Link to={`/workouts/${workout.id}`}>
              {workout.name} - {workout.category}
            </Link>
          </li>
        ))}
        <button>Sort</button>
      </div>
    </div>
  );
};

export default Workouts;
