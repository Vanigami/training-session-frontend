import React from "react";
import { connect } from "react-redux";
import { deleteExercise } from "../actions/deleteExercise";

const Exercises = (props) => {
  const handleDelete = (exercise) => {
    props.deleteExercise(exercise.id, exercise.workout_id);
  };
  return (
    <div>
      {props.exercises &&
        props.exercises.map((exercise) => (
          <li key={exercise.id}>
            {exercise.title} <br />
            Equipment needed: {exercise.equipment}
            <br />
            Info:
            {exercise.exerciseinfo}
            <br />
            Muscle Group: {exercise.muscle}
            <button onClick={() => handleDelete(exercise)}>Delete</button>
          </li>
        ))}
    </div>
  );
};
export default connect(null, { deleteExercise })(Exercises);
