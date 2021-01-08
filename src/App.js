import React from "react";
import {NavLink} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Login from './components/Login';
import Sign from './components/signin';
import Event from './components/Event';
import Footer from "./components/Footer"
// import { ReactComponent } from "*.svg";

const App = () => {
    return (
        <>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/team" component={Team} />
                <Route exact path="/event" component={Event} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/sign" component={Sign} />
                <Redirect to="/" />
            </Switch>
            {/* <Footer/> */}
        </>
    )
};
export default App;
