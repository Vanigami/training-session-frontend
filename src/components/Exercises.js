import React from "react";

const Exercises = (props) => {
  return (
    <div>
      {props.exercises &&
        props.exercises.map((exercise) => (
          <li key={exercise.id}>
            {exercise.title} <br />
            equipment needed: {exercise.equipment}
          </li>
        ))}
    </div>
  );
};
export default Exercises;
