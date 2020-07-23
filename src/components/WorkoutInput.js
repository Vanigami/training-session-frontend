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

  formatInput = (event) => {
    const attribute = event.target.getAttribute("name");
    this.setState({ [attribute]: event.target.value.trim() });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.name === "" || this.state.name === " ") {
      alert("Every workout needs a name");
    } else {
      this.props.addWorkout(this.state);
      this.setState({
        name: "",
        category: "",
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Workout Name: </label>
          <input
            onBlur={this.props.formatInput}
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
