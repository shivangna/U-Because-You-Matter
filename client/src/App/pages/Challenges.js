import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { Button } from "react-bootstrap";

class Challenges extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron className="App">
          <h1>Challenge</h1>
          <p>
            <emoji-slider emoji="😍" />
          </p>
          <p>
            <Button variant="outline-info">Submit</Button>
          </p>
        </Jumbotron>{" "}
      </div>
    );
  }
}
export default Challenges;
