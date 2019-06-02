import React, { Component } from "react";

class Navbarr extends Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-light bg-light">
        <div className="navbar">
          <div className="navWide" />
          <div className="navNarrow">
            <img className="logo" src="./Images/head.jpg" />
            <a className="navbar-brand" href="#">
              U{" "}
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbarr;
