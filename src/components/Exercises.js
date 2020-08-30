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
            <div class="info">
              Info:
              <br />
              {exercise.exerciseinfo}
            </div>
            <div>
              Muscle Group: {exercise.muscle}
              <br />
              Sets: {exercise.setting_repetitionunit}
              <br />
              <br />
              Category: {exercise.exercisecategory}
              <br />
              <button className="button" onClick={() => handleDelete(exercise)}>
                <i class="fas fa-trash" fa-2x></i>
              </button>
              <br />
              <br />
            </div>
          </div>
        ))}
    </div>
  );
};
export default connect(null, { deleteExercise })(Exercises);
