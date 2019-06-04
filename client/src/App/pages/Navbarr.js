import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

class Navbarr extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img src="./Images/u.svg" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Because You matter! </Nav.Link>
            <Nav.Link href="#profil">Profile</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Journal</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Mood</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Challenges</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Todo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Coming soon!
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Welcome Mike!</Nav.Link>
            <Button variant="outline-light">Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Navbarr;
