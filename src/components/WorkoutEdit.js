import React from "react";
import { connect } from "react-redux";
import { editWorkout } from "../actions/editWorkout";

class WorkoutEdit extends React.Component {
  state = {
    name: "",
    category: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  //add form calidation so that user cannot enter empty workout title
  handleSubmit = (event) => {
    event.preventDefault();
    let workout = { ...this.state, id: this.props.workout.id };
    this.props.editWorkout(workout);
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
            placeholder="Name"
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
          <input type="submit" />
        </form>
      </div>
    );
  }
}

WorkoutEdit.defaultProps = {
  workouts: {},
};

export default connect(null, { editWorkout })(WorkoutEdit);
