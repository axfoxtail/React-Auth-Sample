import React from "react";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Header from "./_components/_layout/Header";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

function HomeRoutes() {
  return (
    <div className="main">
      <Header />
      <Switch>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </div>
  );
}

export default HomeRoutes;
