import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { Form, Modal, Button } from "react-bootstrap";
import Wordgraph from "./wordgraph.js"

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
    console.log("entries:", this.state);
  }

  getList = () => {
    fetch("/journal")
      .then(res => res.json())
      .then(results => this.setState({ entries: results }));
  };


  handleSubmit = (event) => {
    alert('An entry was submitted: ' + this.state.value);
    event.preventDefault();
  }


  handleChange = (event) => {
    this.setState({value: event.target.value});
  }
  

  render() {


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
                <form onSubmit={this.handleSubmit}>
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
