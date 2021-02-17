import React from "react";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Leftbar from './_components/_layout/Leftbar';
import Topbar from './_components/_layout/Topbar';
import Dashboard from './Dashboard';
import Settings from "./Settings";
import Users from "./Users";

function AdminRoutes() {
  return (
    <div className="admin-panel">
      <div className="sidebar">
        <Leftbar />
      </div>
      <div className="main-content">
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
          <Route path="*">
            <Redirect to="/404" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default AdminRoutes;
