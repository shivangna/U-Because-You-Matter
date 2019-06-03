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
          <h1>Mood</h1>
          <img
            className="emotionsimages"
            src="./Images/joy.png"
            onClick={this.createSetMood("Joy")}
            variant="outline-info"
          />
          {/* <p>Joy</p> */}
          <img
            className="emotionsimages"
            src="./Images/anger.png"
            onClick={this.createSetMood("Anger")}
            variant="outline-info"
          />
          {/* <p>Anger</p> */}
          <img
            className="emotionsimages"
            src="./Images/sad.png"
            onClick={this.createSetMood("Sadness")}
            variant="outline-info"
          />
          {/* <p>Sad</p> */}
          <img
            className="emotionsimages"
            src="./Images/fear.png"
            onClick={this.createSetMood("Fear")}
            variant="outline-info"
          />
          {/* <p>Fear</p> */}
          <img
            className="emotionsimages"
            src="./Images/disgust.png"
            onClick={this.createSetMood("Disgust")}
            variant="outline-info"
          />
          {/* <p>Disgust</p> */}
          {/* 
          <Button onClick={this.createSetMood("Worst")} variant="outline-info">
            
          </Button> */}
          <Heatmap className="heatmap" values={this.state.moods} />
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
export default Mood;
