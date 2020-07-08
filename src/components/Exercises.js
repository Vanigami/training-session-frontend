import React from "react";
import { connect } from "react-redux";
import { deleteExercise } from "../actions/deleteExercise";

const Exercises = (props) => {
  const handleDelete = () => {
    props.deleteExercise();
  };
  return (
    <div>
      {props.exercises &&
        props.exercises.map((exercise) => (
          <li key={exercise.id}>
            {exercise.title} <br />
            equipment needed: {exercise.equipment}
            <br />
            <button
              onClick={() => handleDelete(exercise.id, exercise.workout.id)}
            >
              Delete
            </button>
          </li>
        ))}
    </div>
  );
};
export default connect(null, { deleteExercise })(Exercises);
