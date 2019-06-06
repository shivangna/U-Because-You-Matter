import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

class Navbarr extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home" />
        <span className="u">U</span>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <p className="dot">: Because You matter!</p>
            <Nav.Link className="welcome" href="#">
              {" "}
            </Nav.Link>
            <Nav.Link href="#profil">Profile</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#journal">Journal</NavDropdown.Item>
              <NavDropdown.Item href="#mood">Mood</NavDropdown.Item>
              <NavDropdown.Item href="#challenges">Challenges</NavDropdown.Item>
              <NavDropdown.Item href="#todo">Todo</NavDropdown.Item>
              <NavDropdown.Item href="#comingsoon">
                Coming soon!
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>Welcome Mike!</Nav.Link>
            <Button variant="outline-light">Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Navbarr;
