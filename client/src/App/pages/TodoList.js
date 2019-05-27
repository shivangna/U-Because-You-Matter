import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      todos: [],
      currentItem: { text: "", key: "" }
    };
  }
  componentDidMount() {
    this.getList();
  }

  getList = () => {
    fetch("/todo")
      .then(res => res.json())
      .then(results => {
        this.setState({ todos: results });
      });
  };

  deleteHandler = key => {
    console.log("i m here");
    console.log("key", key);
    fetch("/todo", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        key: key
      })
    })
      .then(res => res.json())
      .then(data => {
        this.getList();
      })
      .catch(err => console.log(err));
  };

  submitHandler = e => {
    if (e.key === "Enter") console.log("e =", e.target.value);
    this.setState({ task: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    e.target.value = "";
    fetch("/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        task: this.state.task,
        task_state: "incomplete"
      })
    })
      .then(res => res.json())
      .then(data => {
        this.getList();
      });
    this.setState({ tasks: "" });
  };

  render() {
    const todoEntries = this.state.todos;
    console.log("todoEntries", todoEntries);
    const listItems = todoEntries.map(todos => {
      return (
        <li>
          {todos.task}
          <span onClick={() => this.deleteHandler(todos.id)}>
            <i className="fa fa-trash" key={todos.id} />
          </span>{" "}
        </li>
      );
    });
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <div className="App">
          <Jumbotron className="App">
            <h1>To Do</h1>
            <div id="container">
              <h1>
                To-Do List
                <span id="toggle-form">
                  <i className="fa fa-plus" name="removeTask" />
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
              <ul className="thelist">{listItems}</ul>
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
