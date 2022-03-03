import React from "react";
import Login from "./Login/Login.js";
import Register from "./Register/Register.js";
import WorkoutModule from "./Workout/Main.js";
import Menubar from "./Menubar/Menubar.js";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";


const Components = () => {
  return (
    <div>
      <Router>
        <Menubar />
        <Switch>
          <Route path="/" exact component={WorkoutModule} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default Components;