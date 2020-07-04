import React from "react";
import ExerciseInput from "../components/ExerciseInput";
import Exercises from "../components/Exercises";
class ExercisesContainer extends React.Component {
  render() {
    return (
      <div>
        <ExerciseInput />
        <Exercises />
      </div>
    );
  }
}

export default ExercisesContainer;
