import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ChatApp from "./features/ChatApp";
import Login from "./features/Login";

function App() {

  return (
    <Router>

      <Switch>
        <Redirect exact from="/" to="chat" />
        <Route path="/login" component={Login} />
        <Route path="/chat" component={ChatApp} />
      </Switch>
    </Router>
  );
}

export default App;
