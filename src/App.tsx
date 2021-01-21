import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SingleUser from "./components/SingleUser";
import SingleResource from "./components/SingleResource";
import UsersList from "./components/UsersList";
import ResourcesList from "./components/ResourcesList";
import DelayedResponse from "./components/DelayedResponse";
import CreateUser from "./components/CreateUser";
import Modify from "./components/Modify";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  if (isLoggedIn)
    return (
      <Router>
        <div className="App">
          <Link to="/login">
            <button id="log-btn" onClick={() => setIsLoggedIn(false)}>
              Logout
            </button>
          </Link>
          <Link to="/user/id">
            <button id="log-btn">User</button>
          </Link>
          <Link to="/users">
            <button id="log-btn">Users</button>
          </Link>
          <Link to="/create">
            <button id="log-btn">Create User</button>
          </Link>
          <Link to="/modify">
            <button id="log-btn">Modify/Delete</button>
          </Link>
          <Link to="/resource/id">
            <button id="log-btn">Rosource</button>
          </Link>
          <Link to="/resources">
            <button id="log-btn">Rosources</button>
          </Link>
          <Link to="/delayed">
            <button id="log-btn">Delayed</button>
          </Link>
        </div>
        <Switch>
          <Route exact path="/user/id" component={() => <SingleUser />} />

          <Route exact path="/users" component={() => <UsersList />} />

          <Route exact path="/create" component={() => <CreateUser />} />

          <Route exact path="/modify" component={() => <Modify />} />

          <Route
            exact
            path="/resource/id"
            component={() => <SingleResource />}
          />

          <Route exact path="/resources" component={() => <ResourcesList />} />

          <Route exact path="/delayed" component={() => <DelayedResponse />} />
        </Switch>
      </Router>
    );
  return (
    <Router>
      <div className="App">
        <Link to="/register">
          <button id="log-btn">Register</button>
        </Link>
        <Link to="/login">
          <button id="log-btn">Login</button>
        </Link>
      </div>

      <Switch>
        <Route
          exact
          path="/register"
          component={() => (
            <Register isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          )}
        />

        <Route
          exact
          path="/login"
          component={() => (
            <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
