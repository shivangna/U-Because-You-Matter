import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { Form, Modal, Button } from "react-bootstrap";

class Challenges extends Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
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
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={this.props.onHide}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default Challenges;
