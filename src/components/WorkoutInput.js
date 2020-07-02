import React from "react";
import { connect } from "react-redux";
import { addWorkout } from "../actions/addWorkout";

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
      balance: "",
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

export default connect(null, { addWorkout })(WorkoutInput);
