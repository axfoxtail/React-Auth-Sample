import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Leftbar from './_components/_layout/Leftbar';
import Topbar from './_components/_layout/Topbar';
import Dashboard from './Dashboard';
import Settings from "./Settings";
import Users from "./Users";

function AdminRouter() {
  return (
    <Router>
      <div className="sidebar">
        <Leftbar />
      </div>
      <div className="main">
        <Topbar />
        <Switch>
          <Route path="/admin/settings" exact>
            <Settings />
          </Route>
          <Route path="/admin/users" exact>
            <Users />
          </Route>
          <Route path="/admin/dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="/admin" exact>
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default AdminRouter;
