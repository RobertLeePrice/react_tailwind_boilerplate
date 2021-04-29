import React from 'react' 
import { Switch, Route } from 'react-router-dom'
import LoginPage from './pages/Login'


const Routes = () => {
    return (
        <Switch>
            <Route path="/login">
                <LoginPage />
            </Route>
        </Switch>
    )
}

export default Routes