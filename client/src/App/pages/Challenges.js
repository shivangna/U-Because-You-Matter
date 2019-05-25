import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { Form, Modal, Button } from "react-bootstrap";

class Challenges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "white"
    };
  }

  render() {
    const changeColor = () => {
      var newColor = this.state.color == "white" ? "green" : "white";
      this.setState({ color: newColor });
    };

    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <div className="App">
          <Jumbotron className="App">
            <h1>Challenge</h1>
          </Jumbotron>{" "}
        </div>
        <div className="circleOutside">
          <div className="ciclegraph">
            <div
              className="circle"
              style={{ backgroundColor: this.state.color }}
              onClick={changeColor}
            >
              <p>Take 3 deeps breaths</p>
            </div>
            <div
              className="circle"
              style={{ backgroundColor: this.state.color }}
              onClick={changeColor}
            >
              <p>Write down 3 things that you are grateful for</p>
            </div>
            <div
              className="circle"
              style={{ backgroundColor: this.state.color }}
              onClick={changeColor}
            >
              <p>Take a moment to just play, move unwind.</p>
            </div>
            <div
              className="circle"
              style={{ backgroundColor: this.state.color }}
              onClick={changeColor}
            >
              <p>What is meaningful to you?</p>
            </div>
            <div
              className="circle"
              style={{ backgroundColor: this.state.color }}
              onClick={changeColor}
            >
              <p>Enjoy something you usually deny yourself</p>
            </div>
            <div
              className="circle"
              style={{ backgroundColor: this.state.color }}
              onClick={changeColor}
            >
              <p>Reflect on your heritage.</p>
            </div>
          </div>
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default Challenges;
