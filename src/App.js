import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.scss';
import AdminRouter from './admin/AdminRouter';
import HomeRouter from './pages/HomeRouter';

function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/admin">
          <AdminRouter />
        </Route>
        <Route path="/">
          <HomeRouter />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
