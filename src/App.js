import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./Component/Dashboard/index";
import PrivateRoute from './Component/Utilities/PrivateRoutes'
import Login from './Component/Login/index'

function App() {


  return (
    <Router>
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path='/dashboard' component={Dashboard} />
    </Router>
  )

}


export default App;
