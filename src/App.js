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
import { css } from "@emotion/core";
import FadeLoader from "react-spinners/FadeLoader";
const override = css`
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function App() {
  const [loading, setLoading] = React.useState(false);
  EventEmitter.subscribe('isLoading', (event) => setLoading(event));

  return (
    <>
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
      <div className={loading ? "overlay-loader" : "d-none"}>
        <FadeLoader
            css={override}
            size={150}
            color={"#d8b469"}
            loading={loading}
          />
      </div>
    </>
  );
}

export default App;
