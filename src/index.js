// Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
//import "semantic-ui-css/semantic.css";
import { BrowserRouter as Router } from "react-router-dom";

// Objects
import App from "./App";
import { store } from "./store";

// Stylings
import "./index.css";

const AppWithProvider = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(AppWithProvider, document.getElementById("root"));
