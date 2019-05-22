import React, { Component } from "react";
// import { BrowserRouter, Route, Redirect, Link, Switch } from "react-router-dom";
import { Link, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import List from "./pages/List";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {
  Route,
  NavLink,
  HashRouter,
  BrowserRouter
} from "react-router-dom/cjs/react-router-dom";

const Fruit = props => {
  const handleClose = () => {
    props.history.push(props.basePath);
  };

  return (
    <div className="w3-modal" style={{ display: "block" }}>
      <div className="w3-modal-content">
        <div className="w3-container">
          <p>Details for fruit: {props.name}</p>
          <p>Some text. Some text. Some text.</p>
          <button onClick={handleClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

const Fruits = props => {
  const basePath = props.match.path;

  return (
    <div>
      <Route
        path={`${basePath}/\\(fruit/:name\\)`}
        render={props => (
          <Fruit
            name={props.match.params.name}
            basePath={basePath}
            {...props}
          />
        )}
      />
      <h3>Fruits</h3>
      <ul>
        <li>
          <Link to={`${basePath}/(fruit/apple)`}>Apple Details</Link>
        </li>
        <li>
          <Link to={`${basePath}/(fruit/orange)`}>Orange Details</Link>
        </li>
        <li>
          <Link to={`${basePath}/(fruit/banana)`}>Banana Details</Link>
        </li>
      </ul>
    </div>
  );
};

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/list" component={List} />
          <Route path="/fruits" render={props => <Fruits {...props} />} />
          {/* <Redirect exact path="/" to="/fruits" /> */}
        </Switch>
      </div>
    );
    return (
      // <Switch>
      //   <App />
      // </Switch>
      <HashRouter>
        <div>
          <h1>U</h1>
          <Container className="container">
            <Row>
              <div>
                <NavLink to="/list">
                  <i className="fas fa-bars" />
                  List
                </NavLink>
              </div>
              <div>
                <NavLink to="/fruits">
                  <i className="fas fa-bars" />
                  fruits
                </NavLink>
              </div>
              <div>
                <NavLink to="/dailyChallenge">
                  <i className="fas fa-bars" />
                  Daily Challenges
                </NavLink>
              </div>
              <div>
                <NavLink to="/todoList">
                  <i className="fas fa-bars" />
                  Todo List
                </NavLink>
              </div>
              <div className="content">
                <Route exact path="/" component={Home} />
                <Route path="/list" component={List} />
                <Route path="/fruits" render={props => <Fruits {...props} />} />
              </div>
            </Row>
          </Container>
        </div>
      </HashRouter>
    );
  }
}

export default App;
