
import React from "react";
import {
  HashRouter as Router, Redirect, Route, Switch
} from "react-router-dom";
import ChatApp from "./features/ChatApp";
import Login from "./features/Login";
import { NotFound } from './components'

function App() {

  return (
    <Router>

      <Switch>
        <Redirect exact from="/" to="chat" />
        <Route path="/login" component={Login} />
        <Route path="/chat" component={ChatApp} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
