import React from "react";
import { connect } from "react-redux";
import { addExercise } from "../actions/addExercise";
import NavigationBar from "./NavigationBar";
import { Link } from "react-router-dom";

class ExerciseInput extends React.Component {
  state = {
    equipment: "none",
    title: "",
    muscle: "none",
    setting_repetitionunit: "",
    exercisecategory: "",
    exerciseinfo: "Sweat!",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addExercise(this.state, this.props.workout.id);
    this.setState({
      equipment: "none",
      title: "",
      muscle: "none",
      setting_repetitionunit: "",
      exercisecategory: "",
      exerciseinfo: "Sweat!",
    });
  };

  render() {
    return (
      <div>
        <Link to="/workouts">
          <button>Back </button>
        </Link>
        <form onSubmit={this.handleSubmit}>
          <ul>
            <label>Equipment: </label>
            <select
              name="equipment"
              value={this.state.equipment}
              onChange={this.handleChange}
            >
              <option>none</option>
              <option>dumbells</option>
              <option>barbell</option>
              <option>kettlebell</option>
              <option>resistance bands</option>
            </select>
            <br />
            <label>Info: </label>
            <textarea
              type="text"
              name="exerciseinfo"
              value={this.state.exerciseinfo}
              onChange={this.handleChange}
            />
            <br />
            <label>Exercise Name:</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <label>Muscle Group:</label>
            <select
              name="muscle"
              value={this.state.muscle}
              onChange={this.handleChange}
            >
              <option>None</option>
              <option>Quadriceps</option>
              <option>Hamstrings</option>
              <option>Calves</option>
              <option>Chest</option>
              <option>Lats</option>
              <option>Deltoids</option>
              <option>Triceps</option>
              <option>Biceps</option>
              <option>Abs</option>
              <option>Lower Back</option>
            </select>
            <br />
            <label>Sets: </label>
            <input
              type="number"
              name="setting_repetitionunit"
              value={this.state.setting_repetitionunit}
              onChange={this.handleChange}
            ></input>
            <br />
            <label>Category:</label>
            <input
              type="text"
              name="exercisecategory"
              value={this.state.exercisecategory}
              onChange={this.handleChange}
            />
          </ul>
          <button className="submit" type="submit">
            Add
            <br />
            <i class="fas fa-plus"></i>
          </button>
        </form>
      </div>
    );
  }
}
export default connect(null, { addExercise })(ExerciseInput);
