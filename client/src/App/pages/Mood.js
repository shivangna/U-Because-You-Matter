import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";
import Heatmap from "./heatmap.js";
import LiquidGauge from "./gauge";

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
let yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;

class Mood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moods: []
    };
  }

  // componentDidUpdate(prevState) {
  //   // Typical usage (don't forget to compare props):
  //   console.log("previous props", prevState)
  //   if (this.state.moods !== prevState.moods) {
  //     console.log('are you in the ifff??')
  //     this.getList()
  //   }
  // }

  componentDidMount() {
    this.getList();
    console.log("moods:", this.state);
  }

  getList = () => {
    fetch("/mood")
      .then(res => res.json())
      .then(results => this.setState({ moods: results }));
  };

  createSetMood = mood => {
    return () => {
      console.log("clicked", mood);
      fetch("/mood", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mood: mood,
          date: today
        })
      })
        .then(res => res.json())
        .then(data => {
          this.getList();
          console.log(data);
        })
        .catch(err => console.log(err));
    };
  };

  render() {
    return (
      <Modal size="lg" show={this.props.show} onHide={this.props.onHide}>
        <div>
          <Jumbotron className="App">
            <h1>Mood</h1>
            <p>
              <Button
                onClick={this.createSetMood("ReallyGreat")}
                variant="outline-info"
              >
                Really Great!
              </Button>
              <Button
                onClick={this.createSetMood("Good")}
                variant="outline-info"
              >
                Good!
              </Button>
              <Button onClick={this.createSetMood("Ok")} variant="outline-info">
                Ok
              </Button>
            </p>
            <p>
              <Button
                onClick={this.createSetMood("Bad")}
                variant="outline-info"
              >
                Bad
              </Button>
              <Button
                onClick={this.createSetMood("VeryBad")}
                variant="outline-info"
              >
                Very Bad!
              </Button>
              <Button
                onClick={this.createSetMood("Worst")}
                variant="outline-info"
              >
                Worst
              </Button>
            </p>
            <p />
            <Heatmap values={this.state.moods} />
          </Jumbotron>
          <LiquidGauge />
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
export default Mood;
