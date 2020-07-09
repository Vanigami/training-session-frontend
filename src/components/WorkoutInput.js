import React from "react";
import { connect } from "react-redux";
import { addWorkout } from "../actions/addWorkout";
import styled from "styled-components";

class WorkoutInput extends React.Component {
  state = {
    name: "",
    category: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addWorkout(this.state);
    this.setState({
      name: "",
      category: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Workout Name: </label>
          <input
            type="text"
            placeholder="Your killer workout here!"
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
          />
          <br />
          <label>Category </label>
          <select
            value={this.state.category}
            name="category"
            onChange={this.handleChange}
          >
            <option>Strength</option>
            <option>Endurance</option>
            <option>Balance</option>
            <option>Flexibility</option>
          </select>
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(null, { addWorkout })(WorkoutInput);
