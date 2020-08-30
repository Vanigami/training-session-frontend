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
          <div class="card">
            <div key={exercise.id}>
              <h3>{exercise.title}</h3>
              <br />
            </div>
            <div>Equipment needed: {exercise.equipment}</div>
            <br />
            Info:
            {exercise.exerciseinfo}
            Muscle Group: {exercise.muscle}
            <br />
            <button className="button" onClick={() => handleDelete(exercise)}>
              Delete
            </button>
            <br />
            <br />
          </div>
        ))}
    </div>
  );
};
export default connect(null, { deleteExercise })(Exercises);
