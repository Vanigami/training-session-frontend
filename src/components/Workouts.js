import React from "react";
import { Route, Link } from "react-router-dom";
import Workout from "./Workout";

import "../App.css";

const Workouts = (props) => {
  return (
    <div>
      <div className="workout">
        {props.workouts
          .sort((b, a) => b.id - a.id)
          .map((workout) => (
            <li key={workout.id}>
              <Link to={`/workouts/${workout.id}`}>
                {workout.name} - {workout.category}
              </Link>
              {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/000/539/724/small/dumbbell_2__28b_w_29.jpg" /> */}
            </li>
          ))}
      </div>

      {props.workout &&
        props.workouts.sort().map((workout) => {
          if (this.workout.category == "Endurance") {
            {
              return "sorted";
            }
          }
        })}
    </div>
  );
};

export default Workouts;
