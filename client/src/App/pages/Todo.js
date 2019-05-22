import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";

class Todo extends Component {
  render() {
    return (
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
    );
  }
}
export default Todo;
