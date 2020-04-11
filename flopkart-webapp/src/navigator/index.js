import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Home, Cart, Login } from "../screens";

export const Navigator = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
