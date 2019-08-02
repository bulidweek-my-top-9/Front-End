// Dependencies
import React from "react";
import { Route, Switch } from "react-router-dom";
import Data from "./components/Data.js"
import Data2 from "./components/Data2.js"


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
      <Switch>
      <Route exact path="/" component={Login} />
<<<<<<< HEAD
      <Route path="/create" component={CreateAccount} />
      <Route exact path="/home" component={DataList} />
      <Route path="/home/categories/:categoryTitle" component={Data2} />
      </Switch>
=======
      <Route exact path="/create" component={CreateAccount} />

      <Route path="/home" component={DataList} />
      <Route path="/home/categories/:categoryTitle" render={props => <Data {...props}/>} />
>>>>>>> master
    </div>
  );
}

export default App;

{/* <PrivateRoute path="/home" component={DataList} /> */}
