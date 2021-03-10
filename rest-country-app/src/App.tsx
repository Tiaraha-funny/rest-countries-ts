import React from 'react'
import { BrowserRouter as Router, Link, Route,  Switch } from 'react-router-dom';
import Details from './components/Details';
import { GlobalContextProvider } from './components/GlobalContext';
import Header from './components/Header';
import DarkMode from './Pages/DarkMode'
import Home from './Pages/Home'

function RestCountryApp() {
    return (
        <GlobalContextProvider>
            <Router>
            <Header/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/dark-mode">
                        <DarkMode/>
                    </Route>
                    <Route path="/countryDetail/:detailsId">
                        <Details/>
                    </Route>
                </Switch>
        
            </Router>
        </GlobalContextProvider>
    )
}

export default RestCountryApp
