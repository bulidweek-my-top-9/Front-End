// Dependencies
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Objects
import DataList from "./components/DataList.js";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount.js";

// Stylings
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>My Top Nine</h1>
        {/* <Login /> */}
        <Route path="/login" component={Login} />
        <Route path="/create" component={CreateAccount} />
        <DataList />
      </div>
    </Router>
  );
}

export default App;
