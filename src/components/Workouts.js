import React from "react";
import { Route, Link } from "react-router-dom";
import Workout from "./Workout";
import Counter from "./Counter";
import "../App.css";

class Workouts extends React.Component {
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <div onSubmit={this.handleSubmit}>
          <div class="card">
            {this.props.workouts.map((workout) => (
              <li class="container" key={workout.id}>
                <h3>
                  <Link to={`/workouts/${workout.id}`}>
                    {workout.name} <br />
                  </Link>
                  {workout.category}
                  {<Counter />}
                </h3>
              </li>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Workouts;
