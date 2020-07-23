import React from "react";
import { connect } from "react-redux";
import { deleteExercise } from "../actions/deleteExercise";

const Exercises = (props) => {
  const handleDelete = (exercise) => {
    props.deleteExercise(exercise.id, exercise.workout_id);
  };
  return (
    <>
      <div>
        {props.exercises &&
          props.exercises.map((exercise) => (
            <li className="exercise" key={exercise.id}>
              <h2>{exercise.title}</h2>
              <br />
              <li>Equipment needed: {exercise.equipment}</li>
              <br />
              <li className="info">
                Info:
                {exercise.exerciseinfo}
              </li>
              Muscle Group: {exercise.muscle}
              <br />
              <div>
                <button
                  className="button"
                  onClick={() => handleDelete(exercise)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
      </div>
    </>
  );
};
export default connect(null, { deleteExercise })(Exercises);
