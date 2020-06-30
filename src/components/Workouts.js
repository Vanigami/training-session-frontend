import React from "react";

const Workouts = (props) => {
  return (
    <div>
      {props.workouts.map((workout) => (
        <li>
          {workout.name} - {workout.category}
        </li>
      ))}
    </div>
  );
};

export default Workouts;
