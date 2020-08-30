import React from "react";
import { connect } from "react-redux";
import { addWorkout } from "../actions/addWorkout";
import NavigationBar from "./NavigationBar";

class WorkoutInput extends React.Component {
  state = {
    name: "",
    category: "None",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target.name;
    const trimValue = value.split("\n").map((v) => v.trim());
    console.log(trimValue);
    if (trimValue == "") {
      alert("Every workout needs a name");
    } else {
      this.props.addWorkout(this.state);
      this.props.history.push("/workouts");
      this.setState({
        name: trimValue,
        category: "None",
      });
    }
  };
  backBtn = (event) => {
    this.props.history.push("/workouts");
  };

  render() {
    return (
      <>
        <div>
          <h3></h3>
        </div>
        <div class="flex-container">
          <form onSubmit={this.handleSubmit}>
            <span>Workout Name: </span>
            <input
              type="text"
              placeholder="Add you workout name! "
              value={this.state.name}
              name="name"
              onChange={this.handleChange}
            />
          </form>
          <br />
          <form>
            <label>Category: </label>
            <select
              defaultValue={this.state.category}
              value={this.state.category}
              name="category"
              onChange={this.handleChange}
            >
              <option>None</option>
              <option>Strength</option>
              <option>Endurance</option>
              <option>Balance</option>
              <option>Flexibility</option>
            </select>

            <br />
            <input type="submit" />
            <button onClick={this.backBtn}>Back </button>
          </form>
        </div>
      </>
    );
  }
}

export default connect(null, { addWorkout })(WorkoutInput);
