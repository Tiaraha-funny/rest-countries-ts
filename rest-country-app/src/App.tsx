import React from 'react'
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
import DarkMode from './Pages/DarkMode'
import Home from './Pages/Home'

function RestCountryApp() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Home/>
                </Route>
                <Route path="/dark-mode">
                    <DarkMode/>
                </Route>
            </Switch>
        </Router>
    )
}

export default RestCountryApp
