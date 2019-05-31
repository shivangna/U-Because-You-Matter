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
    alert("trying to complete item with an id of " + this.state.task.id);
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
    // if (e.key === "Enter") console.log("e =", e.target.value);
    this.setState({ task: e.target.value });
  };

  handleComplete = e => {};

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
        this.setState({ task: "" });
      });
  };

  render() {
    const todoEntries = this.state.todos;
    // task_state = this.todos.task_state;
    const listItems = todoEntries.map(todos => {
      return (
        <li key={todos.id}>
          {todos.task}
          <span onClick={() => this.deleteHandler(todos.id)}>
            <i className="fas fa-check-square" key={todos.id} />
          </span>{" "}
        </li>
      );
    });
    return (
      <Modal size="lg" show={this.props.show} onHide={this.props.onHide}>
        <div className="App">
          <h1>To Do</h1>
          <div id="container">
            <form onSubmit={this.handleSubmit}>
              <input
                id="input1"
                onChange={this.submitHandler}
                type="text"
                value={this.state.task}
                placeholder="Add New Todo"
              />
              <button type="submit"> Add Task </button>
            </form>
            <ul className="thelist">{listItems}</ul>
          </div>
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default TodoList;
