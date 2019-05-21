import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect, Link, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import List from './pages/List';

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
    return (
        <div style={{ padding: 10 }}>
          <Switch>
            <Route path="/fruits" render={props => <Fruits {...props} />} />
            <Redirect exact path="/" to="/fruits" />
          </Switch>
        </div>
    );
  }
}


export default App;