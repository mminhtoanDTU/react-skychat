import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ChatApp from "./features/ChatApp";
import Login from "./features/Login";
import { auth } from "./firebase/configFirebase";
import { getStoreUser } from './app/UserSlice'

function App() {
  const dispatch = useDispatch();

  //When login set user info to redux
  useEffect(() => {
    const unsubscibed = auth.onAuthStateChanged(async user => {
      if (user) {
        const actionUserInfo = getStoreUser(user.uid);
        await dispatch(actionUserInfo);
      }
    });

    return () => unsubscibed();
  }, [])

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
