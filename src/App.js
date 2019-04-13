import React, { Component } from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";

import Dashboard from './Component/Dashboard'

class App extends Component {
  render() {
    //For Checking is user authenticated?
    const Auth = {
      isAuthenticated: false,
      authenticate() {
        this.isAuthenticated = true;
      }
    };
    // It checks if the user is authenticated, if they are,
    // it renders the "component" prop. If not, it redirects
    // the user to /login.
    const PrivateRoute = () => (
      <Route
        render={props =>
          Auth.isAuthenticated === true ? (
            <Dashboard />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );

    return (
      <>
        <Router>
          <Route path="/login" exact /> 
          <Route path="/dashboard" exact />
        </Router>
      </>
    );
  }
}

export default App;
