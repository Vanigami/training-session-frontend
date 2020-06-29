import React from "react";

export default class App extends React.Component {
  componentDidMount() {
    fetch("http://localhost:3000/api/v1/workouts")
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  }

  render() {
    return <div> Training Session</div>;
  }
}
