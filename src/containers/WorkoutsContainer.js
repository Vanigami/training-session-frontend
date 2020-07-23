import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { fetchWorkouts } from "../actions/fetchWorkouts";
import Workouts from "../components/Workouts";
import Workout from "../components/Workout";
import WorkoutInput from "../components/WorkoutInput";
import { NavigationBar } from "../components/NavigationBar";
import styled from "styled-components";

//styling//
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;
//**end styling**//

class WorkoutsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchWorkouts();
  }
  render() {
    return (
      <GridWrapper>
        <NavigationBar />
        <Switch>
          <Route path="/workouts/new" component={WorkoutInput} />
          <Route
            path="/workouts/:id"
            render={(routerProps) => (
              <Workout {...routerProps} workouts={this.props.workouts} />
            )}
          />
          <Route
            path="/workouts"
            render={(routerProps) => (
              <Workouts {...routerProps} workouts={this.props.workouts} />
            )}
          />
        </Switch>
      </GridWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    workouts: state.workouts,
    loading: state.loading,
  };
};

export default connect(mapStateToProps, { fetchWorkouts })(WorkoutsContainer);
