import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";

class Navbarr extends Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img className="logo" src="../Images/sun.png" alt="logo" /> U
          </Navbar.Brand>
          <Nav className="mr-auto">
            {/* <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Profil</Nav.Link>
            <Nav.Link href="#">Logout</Nav.Link> */}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}
export default Navbarr;
