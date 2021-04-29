import React from 'react' 
import { Switch, Route } from 'react-router-dom'
import LoginPage from './pages/Login'
import Dashboard from './pages/Dashboard'


const Routes = () => {
    return (
        <Switch>
            <Route path="/login">
                <LoginPage />
            </Route>
            <Route exact path="/">
                <Dashboard />
            </Route>
        </Switch>
    )
}

export default Routes