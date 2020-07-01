import React, { Component } from "react";
import { connect } from "react-redux";
import { addWorkout } from "../actions/addWorkout";

class WorkoutInput extends Component {
  state = { name: "", category: "" };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addWorkout(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Workout Name: </label>
          <input
            type="text"
            placeholder="Workout Name"
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
          />
          <br />
          <label>Workout Category: </label>
          <input
            type="text"
            placeholder="Workout Category"
            value={this.state.category}
            name="category"
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(null, { addWorkout })(WorkoutInput);
