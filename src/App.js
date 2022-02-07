import React from 'react';
import {  Home, Signup,} from './components';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';





const App = () => {
    return (
        <Router>
        <div className = "App">
           <div className = "bachainLandingPage">
           <Switch>
                <Route exact path="/">
                <Home/>
                </Route>
                <Route path="/signup">
                    <Signup/>
                </Route>
                {/*
                <Route path="/projects">
                    <Projects/>
                </Route>
                <Route path="/howitworks">
                    <Howitworks/>
                </Route>
                <Route path="/technology">
                    <Technology/>
                </Route>
                <Route path="/security">
                    <Security/>
                </Route>
                */}
            </Switch>
            
            
           </div>
        </div>
        </Router>

    )
}

export default App 