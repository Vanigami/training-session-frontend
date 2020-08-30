import React, { Component } from "react";
import NavigationBar from "./NavigationBar";

export default class Home extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <button>Get Fit</button>
        <div>Lobster</div>
      </div>
    );
  }
}
