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
import Journal from "./pages/Journal";
import Mood from "./pages/Mood";

class App extends Component {
  state = {
    modalShow: false
  };

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <div>
      <span
        onClick={() => this.setState({ modalShow: true })}
        >
        journal
      </span>
        <Journal show={this.state.modalShow} onHide={modalClose}
        />
      <span
        onClick={() => this.setState({ modalShow: true })}
        >
        Mood
      </span>
        <Mood show={this.state.modalShow} onHide={modalClose}
        />
      </div>
    )
  }

}

export default App;
