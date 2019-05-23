import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";
import { Button } from "react-bootstrap";
// import "../node_module/emoji-slider/bin/emoji-slider.js";

class Mood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moods: []
    };
  }

  componentDidMount() {
    this.getList();
    console.log("moods:", this.state)
  }

  getList = () => {
    fetch("/mood")
      .then(res => res.json())
      .then(results => this.setState( {moods:results}));
  };

  render() {
    return (
      <div>
        <Jumbotron className="App">
          <h1>Mood</h1>
          <div>
            {this.state.moods.map(item => {
              return <div key = {item.id}> mood {item.mood} 
                                           date  {item.mood_date}
                                           id  {item.id}
                     </div>;
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
