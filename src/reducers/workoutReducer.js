export default function workoutReducer(state = { workouts: [] }, action) {
  switch (action.type) {
    case "FETCH_WORKOUTS":
      return { workouts: action.payload };
    case "ADD_WORKOUT":
      return { ...state, workouts: [...state.workouts, action.payload] };
    case "ADD_EXERCISE":
      let workouts = state.workouts.map((workout) => {
        if (workout.id === action.payload.id) {
          return action.payload;
        } else {
          return workout;
        }
      });
      return {
        ...state,
        workouts: workouts,
      };
    case "DELETE_EXERCISE":
      let delWorkouts = state.workouts.map((workout) => {
        if (workout.id === action.payload.id) {
          return action.payload;
        } else {
          return workout;
        }
      });
      return {
        ...state,
        workouts: delWorkouts,
      };

    default:
      return state;
  }
}
