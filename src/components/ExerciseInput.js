import React from "react";
import { connect } from "react-redux";

class ExerciseInput extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label>equipment:</label>
          <select>
            <option>none</option>
            <option>dumbells</option>
            <option>barbell</option>
            <option>kettlebell</option>
            <option>resistance bands</option>
          </select>
        </form>
      </div>
    );
  }
}
export default connect(null)(ExerciseInput);
