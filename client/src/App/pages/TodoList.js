import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { Form, Modal, Button } from "react-bootstrap";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    this.getList();
    console.log("todos:", this.state);
  }

  componentDidUpdate() {
    // this.props.currentItem.focus();
  }

  getList = () => {
    fetch("/todo")
      .then(res => res.json())
      .then(results => {
        this.setState({ todos: results });
      });
  };

  render() {
    const todoEntries = this.state.todos;
    const listItems = todoEntries.map(todo => todo.task);
    console.log(this.state.todos);
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <div className="App">
          <Jumbotron className="App">
            <h1>To Do</h1>
            <div id="container">
              <h1>
                To-Do List{" "}
                <span id="toggle-form">
                  <i className="fa fa-plus" />
                </span>
              </h1>
              <form>
                <input type="text" placeholder="Add New Todo" />
                <button type="submit"> Add Task </button>
              </form>
              <ul className="thelist">
                {listItems}
                <li>
                  {listItems}
                  {/* {this.state.todos} */}
                  <span>
                    <i className="fa fa-trash" />
                  </span>{" "}
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

export default TodoList;
