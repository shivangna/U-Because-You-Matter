
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Redirect, Link, Switch } from "react-router-dom";

//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './App/pages/login.js'
import './index.css';
import App from './App/App';


render((
    <BrowserRouter>
      <Route path="/login" exact component={Login} />
        <Route path="/app" component={App} />
    </BrowserRouter>
), document.getElementById('root'));

