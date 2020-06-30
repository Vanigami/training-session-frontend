import React, { Component } from "react";

export default class WorkoutInput extends Component {
  render() {
    return (
      <div>
        <form>
          <label>Workout Name: </label>
          <input type="text" placeholder="Workout Name" />
          <label> Workout Category </label>
          <input type="text" placeholder="Workout Category" />
        </form>
      </div>
    );
  }
}
