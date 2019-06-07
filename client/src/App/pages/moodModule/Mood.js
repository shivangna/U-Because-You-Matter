import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import Heatmap from "./heatmap.js";

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

  componentDidMount() {
    this.getList();
  }

  //GET request to get all saved mood entries from DB
  getList = () => {
    fetch("/mood")
      .then(res => res.json())
      .then(results => this.setState({ moods: results }));
  };

  // POST request to save mood entry to DB
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
            onClick={this.createSetMood("joy")}
            variant="outline-info"
            alt="joy emotion"
          />
          <img
            className="emotionsimages"
            src="./Images/anger.png"
            onClick={this.createSetMood("anger")}
            variant="outline-info"
            alt="anger emotion"
          />
          <img
            className="emotionsimages"
            src="./Images/sad.png"
            onClick={this.createSetMood("sadness")}
            variant="outline-info"
            alt="sad emotion"
          />
          <img
            className="emotionsimages"
            src="./Images/fear.png"
            onClick={this.createSetMood("fear")}
            variant="outline-info"
            alt="fear emotion"
          />

          <img
            className="emotionsimages"
            src="./Images/disgust.png"
            onClick={this.createSetMood("disgust")}
            variant="outline-info"
            alt="disgust emotion"
          />

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
