import React from "react";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    fetch("http://localhost:3000/api/v1/workouts")
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  }

  render() {
    return <div> Training Session</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: state.workouts,
  };
};

export default connect(mapStateToProps)(App);
