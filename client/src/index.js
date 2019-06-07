import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./App/pages/login/login.js";
import "./index.css";
import App from "./App/App";

render(
  <BrowserRouter>
    <Route path="/login" exact component={Login} />
    <Route path="/app" component={App} />
  </BrowserRouter>,
  document.getElementById("root")
);
