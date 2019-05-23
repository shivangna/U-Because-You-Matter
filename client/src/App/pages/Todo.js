import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { Form, Modal, Button } from "react-bootstrap";

class Todo extends Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <div className="App">
          <Jumbotron className="App">
            <h1>To Do</h1>
            <p>
              <ListGroup>
                <ListGroup.Item action>Task</ListGroup.Item>
                <ListGroup.Item action variant="primary">
                  Task In prgress
                </ListGroup.Item>
                <ListGroup.Item action variant="success">
                  Task completed
                </ListGroup.Item>
                <ListGroup.Item action variant="danger">
                  Past due task
                </ListGroup.Item>
              </ListGroup>
            </p>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Add a task</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <p>
              <Button variant="outline-info">Submit</Button>
            </p>
          </Jumbotron>{" "}
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
export default Todo;
