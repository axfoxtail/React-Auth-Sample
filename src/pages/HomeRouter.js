import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./_components/_layout/Header";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

function HomeRouter() {
  return (
    <Router>
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
      </Switch>
    </Router>
  );
}

export default HomeRouter;
