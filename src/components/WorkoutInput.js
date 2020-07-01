import React, { Component } from "react";

export default class WorkoutInput extends Component {
  state = { name: "", category: "" };

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form>
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
        </form>
      </div>
    );
  }
}
