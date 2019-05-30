import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Api from "./Api.js";

class Navbarr extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="navWide">
            <div className="wideDiv">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <div className="navNarrow">
            <i className="fa fa-bars fa-2x" />
            <div className="narrowLinks">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </nav>
        <Api />
      </div>
    );
  }
}
export default Navbarr;
