// Dependencies
import React from "react";
import { Route, Link } from "react-router-dom";
import Data from "./components/Data.js";

// Objects
import DataList from "./components/DataList.js";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount.js";
import PrivateRoute from "./components/PrivateRoute";
import { CategoryList } from "./components/CategoryList.js";

// Stylings
import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1>My Top Nine</h1>
      <Link to="/favoritemusicians">My favorite musicians</Link>
      <Route path="/favoritemusicians" component={CategoryList} />
      <Route exact path="/" component={Login} />
      <Route exact path="/create" component={CreateAccount} />

      <PrivateRoute path="/home" component={DataList} />
      <PrivateRoute
        path="/home/categories/:categoryTitle"
        render={props => <Data {...props} />}
      />
    </div>
  );
}

export default App;

{
  /* <PrivateRoute path="/home" component={DataList} /> */
}
