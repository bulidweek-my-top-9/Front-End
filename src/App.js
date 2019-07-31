// Dependencies
import React from "react";
import { Route } from "react-router-dom";

// Objects
import DataList from "./components/DataList.js";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount.js";
import PrivateRoute from "./components/PrivateRoute";

// Stylings
import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1>My Top Nine</h1>
      <Route exact path="/" component={Login} />
      <Route exact path="/create" component={CreateAccount} />
      <Route exact path="/home" component={DataList} />
    </div>
  );
}

export default App;

{/* <PrivateRoute path="/home" component={DataList} /> */}
