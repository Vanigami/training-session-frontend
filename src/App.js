import React from "react";
import { connect } from "react-redux";
import WorkoutsContainer from "./containers/WorkoutsContainer";

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <WorkoutsContainer />
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     accounts: state.workouts,
//   };
// };

export default connect()(App);
