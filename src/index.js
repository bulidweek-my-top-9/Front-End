// Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

// Objects
import App from "./App";
import { store } from "./store";

// Stylings
import "./index.scss";

const AppWithProvider = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(AppWithProvider, document.getElementById("root"));
