import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.scss';
import { EventEmitter } from './utils/events';
import AdminRoutes from './admin/AdminRoutes';
import HomeRoutes from './pages/HomeRoutes';
import NoMatch from './components/NoMatch';
import Login from './auth/Login';

function App() {
  const [loading, setLoading] = React.useState(false);
  EventEmitter.subscribe('isLoading', (event) => setLoading(event));

  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/404" exact>
          <NoMatch />
        </Route>
        <Route path="/login" exact>
          <Login />
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
