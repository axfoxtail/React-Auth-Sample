import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.scss';
import AdminRoutes from './admin/AdminRoutes';
import HomeRoutes from './pages/HomeRoutes';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/404" exact>
          <NoMatch />
        </Route>
        <Route path="/admin">
          <AdminRoutes />
        </Route>
        <Route path="/">
          <HomeRoutes />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
