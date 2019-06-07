import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

class Challenges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color1: "white",
      color2: "white",
      color3: "white",
      color4: "white",
      color5: "white",
      color6: "white",
      count: 0,
      value: 0
    };
  }

  render() {
    //Succession of functions that controls the individual color of each node
    const changeColor1 = () => {
      var newColor = this.state.color1 === "white" ? "#3d98c6" : "white";
      this.setState({ color1: newColor });
      if (this.state.color1 === "white") {
        new Promise((resolve, reject) => {
          resolve(this.setState({ count: this.state.count + 1 }));
        }).then(() => {
          this.setState({ value: (this.state.count / 6).toFixed(2) });
        });
      } else {
        new Promise((resolve, reject) => {
          resolve(this.setState({ count: this.state.count - 1 }));
        }).then(() => {
          this.setState({ value: (this.state.count / 6).toFixed(2) });
        });
      }
    };
    const changeColor2 = () => {
      var newColor = this.state.color2 === "white" ? "#3d98c6" : "white";
      this.setState({ color2: newColor });
      if (this.state.color2 === "white") {
        new Promise((resolve, reject) => {
          resolve(this.setState({ count: this.state.count + 1 }));
        }).then(() => {
          this.setState({ value: (this.state.count / 6).toFixed(2) });
        });
      } else {
        new Promise((resolve, reject) => {
          resolve(this.setState({ count: this.state.count - 1 }));
        }).then(() => {
          this.setState({ value: (this.state.count / 6).toFixed(2) });
        });
      }
    };
    const changeColor3 = () => {
      var newColor = this.state.color3 === "white" ? "#3d98c6" : "white";
      this.setState({ color3: newColor });
      if (this.state.color3 === "white") {
        new Promise((resolve, reject) => {
          resolve(this.setState({ count: this.state.count + 1 }));
        }).then(() => {
          this.setState({ value: (this.state.count / 6).toFixed(2) });
        });
      } else {
        new Promise((resolve, reject) => {
          resolve(this.setState({ count: this.state.count - 1 }));
        }).then(() => {
          this.setState({ value: (this.state.count / 6).toFixed(2) });
        });
      }
    };
    const changeColor4 = () => {
      var newColor = this.state.color4 === "white" ? "#3d98c6" : "white";
      this.setState({ color4: newColor });
      if (this.state.color4 === "white") {
        new Promise((resolve, reject) => {
          resolve(this.setState({ count: this.state.count + 1 }));
        }).then(() => {
          this.setState({ value: (this.state.count / 6).toFixed(2) });
        });
      } else {
        new Promise((resolve, reject) => {
          resolve(this.setState({ count: this.state.count - 1 }));
        }).then(() => {
          this.setState({ value: (this.state.count / 6).toFixed(2) });
        });
      }
    };
    const changeColor5 = () => {
      var newColor = this.state.color5 === "white" ? "#3d98c6" : "white";
      this.setState({ color5: newColor });
      if (this.state.color5 === "white") {
        new Promise((resolve, reject) => {
          resolve(this.setState({ count: this.state.count + 1 }));
        }).then(() => {
          this.setState({ value: (this.state.count / 6).toFixed(2) });
        });
      } else {
        new Promise((resolve, reject) => {
          resolve(this.setState({ count: this.state.count - 1 }));
        }).then(() => {
          this.setState({ value: (this.state.count / 6).toFixed(2) });
        });
      }
    };
    const changeColor6 = () => {
      var newColor = this.state.color6 === "white" ? "#3d98c6" : "white";
      this.setState({ color6: newColor });
      if (this.state.color6 === "white") {
        new Promise((resolve, reject) => {
          resolve(this.setState({ count: this.state.count + 1 }));
        }).then(() => {
          this.setState({ value: (this.state.count / 6).toFixed(2) });
        });
      } else {
        new Promise((resolve, reject) => {
          resolve(this.setState({ count: this.state.count - 1 }));
        }).then(() => {
          this.setState({ value: (this.state.count / 6).toFixed(2) });
        });
      }
    };

    return (
      <Modal
        size="lg"
        dialogClassName="modal-90%w"
        show={this.props.show}
        onHide={this.props.onHide}
      >
        <div className="App">
          <h1>Challenge</h1>
        </div>
        <div className="circleOutside">
          <CircularProgressbar
            value={this.state.value}
            maxValue={1}
            text={`${this.state.value * 100}%`}
          />
          <div className="ciclegraph">
            <div
              id="color1"
              className="circle"
              style={{ backgroundColor: this.state.color1 }}
              onClick={() => {
                changeColor1();
              }}
            >
              <p>Take 3 deeps breaths</p>
            </div>
            <div
              id="color2"
              className="circle"
              style={{ backgroundColor: this.state.color2 }}
              onClick={changeColor2}
            >
              <p>Write down 3 things that you are grateful for</p>
            </div>
            <div
              id="color3"
              className="circle"
              style={{ backgroundColor: this.state.color3 }}
              onClick={changeColor3}
            >
              <p>Take a moment to just play, move unwind.</p>
            </div>
            <div
              id="color4"
              className="circle"
              style={{ backgroundColor: this.state.color4 }}
              onClick={changeColor4}
            >
              <p>What is meaningful to you?</p>
            </div>
            <div
              id="color5"
              className="circle"
              style={{ backgroundColor: this.state.color5 }}
              onClick={changeColor5}
            >
              <p>Enjoy something you usually deny yourself</p>
            </div>
            <div
              id="color6"
              className="circle"
              style={{ backgroundColor: this.state.color6 }}
              onClick={changeColor6}
            >
              <p>Reflect on your heritage.</p>
            </div>
          </div>
        </div>
        <Modal.Footer>
          <Button
            className="close"
            variant="secondary"
            onClick={this.props.onHide}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default Challenges;
