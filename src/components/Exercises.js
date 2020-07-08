import React from "react";
import { connect } from "react-redux";
import { deleteExercise } from "../actions/deleteExercise";

const Exercises = (props) => {
  const handleDelete = (events) => {};
  return (
    <div>
      {props.exercises &&
        props.exercises.map((exercise) => (
          <li key={exercise.id}>
            {exercise.title} <br />
            equipment needed: {exercise.equipment}
            <br />
            <button onclick={handleDelete}>Delete</button>
          </li>
        ))}
    </div>
  );
};
export default connect(null, { deleteExercise })(Exercises);
