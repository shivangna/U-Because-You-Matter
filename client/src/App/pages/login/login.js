import React, { Component } from "react";
import "./login.css";
import LoginSteps from "./login-steps.js";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

class Login extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home" />
          <span className="u">U </span>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <p className="dot">: Because You matter!</p>
              <Nav.Link className="welcome" href="#">
                {" "}
              </Nav.Link>
            </Nav>
            <Nav>
              <Button variant="outline-light">Register</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <LoginSteps />
        <div className="main">
          <p className="sign" align="center">
            Log in to your account
          </p>
          <form className="form1">
            <input
              className="un "
              type="text"
              align="center"
              placeholder="Username"
            />
            <input
              className="pass"
              type="password"
              align="center"
              placeholder="Password"
            />
          </form>
          <Link to="/app">
            <button className="submit" align="center">
              {" "}
              LOG IN
            </button>
          </Link>
          <p className="forgot" align="center">
            <a href="#">Forgot Password?</a>
          </p>
          <a href="#" />
        </div>
        <a href="#" />
        <div class="footer">
          <p />
          <p>Made with 🧡 by Shivangna, Mike and Jocelyne! </p>
        </div>
      </div>
    );
  }
}

export default Login;
