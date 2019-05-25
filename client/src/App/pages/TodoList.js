import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";

class TodoList extends Component {
  componentDidUpdate() {
    //  this.props.currentItem.focus();
  }

  createTasks(item) {
    return (
      <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
        {item.text}
        <span>
          <i className="fa fa-trash" />
        </span>{" "}
      </li>
    );
  }

  render() {
    const todoEntries = this.props.listEntries;
    const listItems = todoEntries.map(this.createTasks);
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
              <form onSubmit={this.props.addItem}>
                <input
                  ref={this.props.inputElement}
                  value={this.props.currentItem.text}
                  onChange={this.props.handleInput}
                  type="text"
                  placeholder="Add New Todo"
                />
              </form>
              <ul className="thelist">{listItems}</ul>
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
