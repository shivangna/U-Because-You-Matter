import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import CompleteMessages from "./completeMessages";
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

  onDragStart = (e, index) => {
    this.draggedItem = this.state.todos[index];
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  };

  onDragOver = index => {
    const draggedOverItem = this.state.todos[index];

    //if the item is dragged over iteself, ignore
    if (this.draggedItem === draggedOverItem) {
      return;
    }

    //filter out the currently dragged item
    let items = this.state.todos.filter(item => item !== this.draggedItem);

    //add the dragged item after the dragged over item
    items.splice(index, 0, this.draggedItem);

    this.setState({ todos: items });
  };

  onDragEnd = () => {
    this.draggedIdx = null;
  };

  // GET request for all task saved to DB
  getList = () => {
    fetch("/todo")
      .then(res => res.json())
      .then(results => {
        this.setState({ todos: results });
      });
  };

  // DELETE request to delete tasks from DB
  deleteHandler = key => {
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
    this.setState({ task: e.target.value });
  };

  // DELETE request to delete tasks from DB
  // Also calls function that display messages
  completeHandler = key => {
    alert(CompleteMessages());
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

    const listItems = todoEntries.map((todos, index) => {
      return (
        <li key={todos.id} onDragOver={() => this.onDragOver(index)}>
          <span
            className="drag"
            draggable
            onDragStart={e => this.onDragStart(e, index)}
            onDragEnd={this.onDragEnd}
          >
            <i className="fas fa-bars" />
          </span>
          {todos.task}
          <span
            className="checkDone"
            onClick={() => this.completeHandler(todos.id)}
          >
            <i className="fas fa-check" key={todos.id} />
          </span>
          <span
            className="checkDone"
            onClick={() => this.deleteHandler(todos.id)}
          >
            <i class="fas fa-trash" key={todos.id} />
          </span>
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
                className="todoinput"
                id="input1"
                onChange={this.submitHandler}
                type="text"
                value={this.state.task}
                placeholder="Add New Todo"
              />
              <button className="todosubmit" type="submit">
                {" "}
                Add Task{" "}
              </button>
            </form>
            <ul className="thelist">{listItems}</ul>
          </div>
        </div>
        <Modal.Footer>
          <Button
            className="close"
            variant="secondary"
            onClick={this.props.onHide}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default TodoList;
