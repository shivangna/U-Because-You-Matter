import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { Form, Modal, Button } from "react-bootstrap";
import Wordgraph from "./wordgraph.js"

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
let yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;


class Journal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      value:''
    };
  }

  componentDidMount() {
    this.getList();
    console.log("component did mount entries:", this.state);
  }

  getList = () => {
    fetch("/journal")
      .then(res => res.json())
      .then(results => this.setState({ entries: results }));
  };


  handleSubmit = (event) => {
    event.preventDefault();
    console.log("clicked", this.state.value);
    fetch("/journal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        entry: this.state.value,
        date: today
      })
    })
    .then(res => res.json())
    .then(data => {
      this.getList();
      console.log("this is the data", data);
    })
    .catch(err => console.log(err));
  }


  handleChange = (event) => {
    this.setState({value: event.target.value});
  }
  

  render() {
    console.log("these are the values", this.state.entries)
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <div className="App">
          <Jumbotron>
            <h1>Journal</h1>
            <p>
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Title </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Select a date</Form.Label>
                  <Form.Control as="select">
                    <option>Date</option>
                    <option>Date</option>
                    <option>Date</option>
                    <option>Date</option>
                    <option>Date</option>
                    <option>Date</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                  <Form.Label>Select a time</Form.Label>
                  <Form.Control as="select">
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                <form onSubmit={this.handleSubmit} defaultValue={this.state.value}>
                <label> add your text 
                  <input type='text' value = {this.state.value} onChange={this.handleChange} />
                </label>
                <input type ='submit' value = 'Submit' />
                </form>
                </Form.Group>
              </Form>
            </p>
            <Wordgraph/>

            {/* <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>How is your day going?</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group> */}

                
            <p>
              
            </p>
          </Jumbotron>
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

export default Journal;
