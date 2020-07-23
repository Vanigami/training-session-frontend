export const addExercise = (exercise, workoutId) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/workouts/${workoutId}/exercises`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(exercise),
    })
      .then((resp) => resp.json())
      .then((workout) => dispatch({ type: "ADD_EXERCISE", payload: workout }));
  };
};
