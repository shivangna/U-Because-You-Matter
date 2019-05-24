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
            <div id="container">
              <h1>
                To-Do List{" "}
                <span id="toggle-form">
                  <i class="fa fa-plus" />
                </span>
              </h1>
              <input type="text" placeholder="Add New Todo" />

              <ul>
                <li>
                  <span>
                    <i class="fa fa-trash" />
                  </span>{" "}
                  Finish Final Project
                </li>
                <li>
                  <span>
                    <i class="fa fa-trash" />
                  </span>{" "}
                  Finish Final Project
                </li>
                <li>
                  <span>
                    <i class="fa fa-trash" />
                  </span>{" "}
                  Finish Final Project
                </li>
              </ul>
            </div>
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
