import React, { Component } from "react";

export default class WorkoutInput extends Component {
  state = { name: "", category: "" };

  render() {
    return (
      <div>
        <form>
          <label>Workout Name: </label>
          <input
            type="text"
            placeholder="Workout Name"
            value={this.state.name}
          />
          <br></br>
          <label>Workout Category: </label>
          <input type="text" placeholder="Workout Category" />
        </form>
      </div>
    );
  }
}
