import React from "react";

const Exercises = (props) => {
  return (
    <div>
      {props.exercises &&
        props.exercises.map((exercise) => (
          <li key={exercise.id}>
            {exercise.exercise} <br />
            equipment needed: {exercise.equipment}
          </li>
        ))}
    </div>
  );
};
export default Exercises;
