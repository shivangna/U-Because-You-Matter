import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { Form, Modal, Button } from "react-bootstrap";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
  }

  submitHandler = e => {
    console.log("e =", e.target.value);
    this.setState({ task: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch("/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        task: this.state.task,
        task_state: 0
      })
    });
  };

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <div className="App">
          <Jumbotron className="App">
            <h1>To Do</h1>
            <div id="container">
              <h1>
                To-Do List
                <span id="toggle-form">
                  <i className="fa fa-plus" />
                </span>
              </h1>
              <form onSubmit={this.handleSubmit}>
                <input
                  onChange={this.submitHandler}
                  type="text"
                  placeholder="Add New Todo"
                />
                <button type="submit"> Add Task </button>
              </form>
              <ul className="thelist" />
            </div>
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

export default TodoList;
