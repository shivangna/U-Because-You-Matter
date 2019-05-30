import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Api from "./Api.js";

class Navbarr extends Component {
  render() {
    return (
      <nav class="navbar sticky-top navbar-light bg-light">
        <div className="navbar">
          <div className="navWide" />
          <div className="navNarrow">
            <a class="navbar-brand" href="#">
              U{" "}
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbarr;
