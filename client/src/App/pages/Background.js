import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { Form, Modal, Button } from "react-bootstrap";
//import ChartViewer from "./wordgraph.js"
import ChartViewer from "./final-wordgraph.js";
import { parse } from "url";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Background extends Component {
  render() {
    return (
      <div class="context">
        <div class="area">
          <ul class="circles">
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
        </div>
        <title>U</title>
      </div>
    );
  }
}

export default Background;
