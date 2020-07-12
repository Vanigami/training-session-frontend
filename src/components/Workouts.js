import React from "react";
import { Route, Link } from "react-router-dom";
import Workout from "./Workout";

import "../App.css";

const Workouts = (props) => {
  return (
    <div>
      <div className="workout">
        {props.workouts.map((workout) => (
          <li className="workout" key={workout.id}>
            <h3>
              <Link to={`/workouts/${workout.id}`}>
                {workout.name} <br />
              </Link>
            </h3>
          </li>
        ))}
        <button>Sort</button>
      </div>
    </div>
  );
};

export default Workouts;
