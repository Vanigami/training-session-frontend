export const deleteExercise = (exerciseId, workoutId) => {
  return (dispatch) => {
    return fetch(
      `http://localhost:3001/api/v1/workouts/${workoutId}/exercises/${exerciseId}`,
      {
        method: "DELETE",
      }
    )
      .then((resp) => resp.json())
      .then((workout) =>
        dispatch({ type: "DELETE_EXERCISE", payload: workout })
      );
  };
};
