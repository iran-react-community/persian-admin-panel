import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            Auth.isAuthenticated ? <Component /> : <Redirect to="/login" />
        }
    />
)

const Auth = {
    isAuthenticated : false,
    authenticate(){
        this.isAuthenticated = true
    }
}

export default PrivateRoute;