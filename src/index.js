// Dependencies
import React from "react";
import ReactDOM from "react-dom";
import CategoryList from "./components/CategoryList.js";
import { Provider } from "react-redux";
//import "semantic-ui-css/semantic.css";

// Objects
import App from "./App";
import { store } from "./store";

// Stylings
import "./index.css";

const AppWithProvider = (
  <Provider store={store}>
    {/*<App />*/}
    <h1>My Top Nine</h1>
    <CategoryList />
  </Provider>
);

ReactDOM.render(AppWithProvider, document.getElementById("root"));
