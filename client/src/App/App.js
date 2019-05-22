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
import Challenges from "./pages/Challenges.js";
import Todo from "./pages/Todo.js";

class App extends Component {
  state = {
    modalShow: false
  };
  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <div>
        <Navbarr />
        <span onClick={() => this.setState({ modalShow: true })} />
        <Journal show={this.state.modalShow} onHide={modalClose} />
        <span onClick={() => this.setState({ modalShow: true })} />
        <Mood show={this.state.modalShow} onHide={modalClose} />
        <span onClick={() => this.setState({ modalShow: true })} />
        <Challenges show={this.state.modalShow} onHide={modalClose} />
        <span onClick={() => this.setState({ modalShow: true })} />
        <Todo show={this.state.modalShow} onHide={modalClose} />
      </div>
    );
  }
}

export default App;
