import React from "react";
import { connect } from "react-redux";
import { editWorkout } from "../actions/addWorkout";

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
            placeholder="Name"
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
          />
          <br />
          <label>Category </label>
          <input
            type="text"
            placeholder="Category"
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

export default connect(null, { editWorkout })(WorkoutEdit);
