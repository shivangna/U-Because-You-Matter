import React, { Component } from "react";
// import { BrowserRouter, Route, Redirect, Link, Switch } from "react-router-dom";
import { Link, Switch } from "react-router-dom";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {
  Route,
  NavLink,
  HashRouter,
  BrowserRouter
} from "react-router-dom/cjs/react-router-dom";
import Navbarr from "./pages/Navbarr.js";
import Journal from "./pages/Journal.js";
import Mood from "./pages/Mood.js";
import Home from "./pages/Home.js";




class App extends Component {

  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route path = '/journal' component = {Journal}/>
          <Route path = '/mood' component = {Mood}/>
        </Switch>
      </div>
    )

    return (
      <div>
        <Navbarr />
        <Home/>
      </div>
    );
  }
}

export default App;
