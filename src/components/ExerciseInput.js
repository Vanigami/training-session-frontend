import React from "react";
import { connect } from "react-redux";
import { addExercise } from "../actions/addExercise";

class ExerciseInput extends React.Component {
  state = {
    equipment: "none",
    title: "",
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
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>equipment:</label>
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
          <label>Exercise Name:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default connect(null, { addExercise })(ExerciseInput);
