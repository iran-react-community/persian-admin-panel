import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Dashboard from "./Component/Dashboard/index";
import PrivateRoute from './Component/PrivateRoutes'

function App() {


  return (
    <Router>
      <Route exact path="/login" />
      <PrivateRoute exact path='/dashboard' component={Dashboard} />
    </Router>
  )

}


export default App;
