// Dependencies
import React from "react";
import ReactDOM from "react-dom";
import Category from "./components/Category.js";
import { Provider } from "react-redux";

// Objects
import App from "./App";
import { store } from "./store";

// Stylings
import "./index.css";

const AppWithProvider = (
  <Provider store={store}>
    <App />
    <Category />
  </Provider>
);

ReactDOM.render(AppWithProvider, document.getElementById("root"));
