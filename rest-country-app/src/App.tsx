import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Details from './components/Details';
import { GlobalContextProvider } from './components/GlobalContext';
import Header from './components/Header';
import Home from './Pages/Home';


function RestCountryApp() {

    const [bgColor, setBgColor] = useState("white");

    function ChangeBackgroundColor() {
        setBgColor("black")
        window.addEventListener('click', changeModeColor)
    }

    function changeModeColor() {
        document.body.style.backgroundColor = `background-color: ${bgColor}`
        console.log(bgColor);
    }

    useEffect(() => {
        ChangeBackgroundColor()
    }, [])


    return (
        <GlobalContextProvider>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/countryDetail/:detailsId">
                        <Details />
                    </Route>
                </Switch>

            </Router>
        </GlobalContextProvider>
    )
}

export default RestCountryApp
