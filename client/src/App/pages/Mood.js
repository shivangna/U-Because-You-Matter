import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";
import { Button } from "react-bootstrap";
// import "../node_module/emoji-slider/bin/emoji-slider.js";

class Mood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    this.getList();
  }

  getList = () => {
    fetch("/mood")
      .then(res => res.json())
      .then(list => this.setState({ list }));
  };

  render() {
    return (
      <div>
        <Jumbotron className="App">
          <h1>Mood</h1>
          <p>
            <emoji-slider emoji="😍" />
          </p>
          <div>
            {this.state.list.map(item => {
              return <div>{item}</div>;
            })}
          </div>
          <p>
            <Button variant="outline-info">Submit</Button>
          </p>
        </Jumbotron>
        ;
      </div>
    );
  }
}
export default Mood;
