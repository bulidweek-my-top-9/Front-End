// Dependencies
import React, { useState } from "react";

// Objects
import DataList from "./components/DataList.js";

// Stylings
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>My Top Nine</h1>
      <DataList />
    </div>
  );
}

export default App;
