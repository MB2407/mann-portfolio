import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from "./Cards/Cards.jsx";
import { render } from "@testing-library/react";


function App() {
    
    return(
        
        <div className="app">
        
        <React.Fragment>
        <Navbar />
       <Router>        
       <Switch>
            
            <Route exact path="/" component={Header} />
            <Route path="/intro" component={Intro} />
            <Route path="/cards" component={Cards} />
            <Route path="/contact" component={Contact} />
        </Switch>
        </Router>
        </React.Fragment>
        </div>
            
    );
    
}
export default App;
