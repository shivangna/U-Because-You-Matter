import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";
import { Form, Modal, Button } from "react-bootstrap";
// import "../node_module/emoji-slider/bin/emoji-slider.js";
import Heatmap from './heatmap.js';

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
      <Modal show={this.props.show} onHide={this.props.onHide}>
      <div>
        <Jumbotron className="App">
          <h1>Mood</h1>
          <p>
          <emoji-slider emoji="😍" />
          </p>
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
          <Heatmap values={this.state.moods}/>
        </Jumbotron>
        ;
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
export default Mood;
