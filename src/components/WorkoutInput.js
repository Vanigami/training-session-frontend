import React, { Component } from "react";

export default class WorkoutInput extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Workout Name" />
        </form>
      </div>
    );
  }
}
