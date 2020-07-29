import React from "react";
import Workout from "./Workout";

class Counter extends React.Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        <div>{this.state.count}</div>
      </button>
    );
  }
}
export default Counter;
