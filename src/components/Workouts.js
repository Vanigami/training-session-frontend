import React from "react";
import { Route, Link } from "react-router-dom";
import Workout from "./Workout";

import "../App.css";

const Workouts = (props) => {
  return (
    <>
      <div>
        <div class="card">
          {props.workouts.map((workout) => (
            <li class="container" key={workout.id}>
              <h3>
                <Link to={`/workouts/${workout.id}`}>
                  {workout.name} <br />
                </Link>
                {workout.category}
              </h3>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default Workouts;
