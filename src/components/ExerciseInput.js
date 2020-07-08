import React from "react";
import { connect } from "react-redux";

class ExerciseInput extends React.Component {
  state = {
    equipment: "none",
    exercise: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
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
            name="exercise"
            value={this.state.exercise}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default connect(null)(ExerciseInput);
