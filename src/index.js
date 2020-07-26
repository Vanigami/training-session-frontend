import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import workoutReducer from "./reducers/workoutReducer";
import { LinkContainer } from "react-router-bootstrap";

import App from "./App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  workoutReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <Router>
        <App />
      </Router>
    </React.Fragment>
  </Provider>,

  document.getElementById("root")
);
