import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";
// import { VictoryPie, VictoryAnimation, VictoryLabel } from "victory";
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
      color7: "green",
      count: 1,
      value: 0
    };
  }

  render() {
    const changeCount = () => {
      let arr = Object.values(this.state);
      // console.log("ObjArr: ", objArr);
      var counts = {};

      for (var i = 0; i < arr.length; i++) {
        var num = arr[i];
        counts[num] = counts[num] ? counts[num] + 1 : 1;
      }
      console.log("Green count: ", counts["green"]);
      this.setState({ count: counts["green"] });
      return this.setState({ value: (this.state.count / 6).toFixed(2) });
    };
    const changeColor1 = () => {
      var newColor = this.state.color1 === "white" ? "green" : "white";
      this.setState({ color1: newColor });
      changeCount();
    };
    const changeColor2 = () => {
      var newColor = this.state.color2 === "white" ? "green" : "white";
      this.setState({ color2: newColor });
      changeCount();
    };
    const changeColor3 = () => {
      var newColor = this.state.color3 === "white" ? "green" : "white";
      this.setState({ color3: newColor });
      changeCount();
    };
    const changeColor4 = () => {
      var newColor = this.state.color4 === "white" ? "green" : "white";
      this.setState({ color4: newColor });
      changeCount();
    };
    const changeColor5 = () => {
      var newColor = this.state.color5 === "white" ? "green" : "white";
      this.setState({ color5: newColor });
      changeCount();
    };
    const changeColor6 = () => {
      var newColor = this.state.color6 === "white" ? "green" : "white";
      this.setState({ color6: newColor });
      changeCount();
    };

    return (
      <Modal
        dialogClassName="modal-90%w"
        show={this.props.show}
        onHide={this.props.onHide}
      >
        <div className="App">
          <Jumbotron className="App">
            <h1>Challenge</h1>
          </Jumbotron>{" "}
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
          <Button variant="secondary" onClick={this.props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default Challenges;
