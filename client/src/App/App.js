import React, { Component } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbarr from "./pages/Navbarr.js";
import Journal from "./pages/Journal.js";
import Mood from "./pages/Mood.js";
import Challenges from "./pages/Challenges.js";
import TodoList from "./pages/TodoList.js";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

class App extends Component {
  state = {
    modalShowJournal: false,
    // modalShowMood: false,
    // modalShowChallenges: false,
    // modalShowTodo: false
    items: [],
    currentItem: { text: "", key: "" }
  };
  handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    this.setState({
      currentItem
    });
  };

  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      console.log(newItem);
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: { text: "", key: "" }
      });
    }
  };

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems
    });
  };

  render() {
    let modalCloseJournal = () => this.setState({ modalShowJournal: false });
    let modalCloseMood = () => this.setState({ modalShowMood: false });
    let modalCloseChallenges = () =>
      this.setState({ modalShowChallenges: false });
    let modalCloseTodo = () => this.setState({ modalShowTodo: false });

    return (
      <div>
        <Navbarr />
        <Container>
          <Row className="row">
            <Col xs>
              <span onClick={() => this.setState({ modalShowJournal: true })}>
                <p className="moduletitle">Journal</p>

                <Image
                  className="journalpic"
                  src="./Images/journal.png"
                  roundedCircle
                />
              </span>
              <Journal
                show={this.state.modalShowJournal}
                onHide={modalCloseJournal}
              />
            </Col>

            <Col xs={{ order: 12 }}>
              <span onClick={() => this.setState({ modalShowMood: true })}>
                <p className="moduletitle">Mood</p>

                <Image
                  className="moodpic"
                  src="./Images/mood.png"
                  roundedCircle
                />
              </span>
              <Mood show={this.state.modalShowMood} onHide={modalCloseMood} />
            </Col>

            <Col xs={{ order: 12 }}>
              <span
                onClick={() => this.setState({ modalShowChallenges: true })}
              >
                <p className="moduletitle">Challenges</p>

                <Image
                  className="challengespic"
                  src="./Images/challenges.png"
                  roundedCircle
                />
              </span>

              <Challenges
                show={this.state.modalShowChallenges}
                onHide={modalCloseChallenges}
              />
            </Col>
          </Row>

          <Row className="row">
            <Col xs>
              <span onClick={() => this.setState({ modalShowTodo: true })}>
                <p className="moduletitle">Todo</p>
                <Image
                  className="todopic"
                  src="./Images/todo.png"
                  roundedCircle
                />
              </span>
              <TodoList
                entries={this.state.items}
                deleteItem={this.deleteItem}
                listEntries={this.state.items}
                addItem={this.addItem}
                inputElement={this.inputElement}
                handleInput={this.handleInput}
                currentItem={this.state.currentItem}
                show={this.state.modalShowTodo}
                onHide={modalCloseTodo}
              />
            </Col>

            <Col xs>
              <span onClick={() => this.setState({ modalShowTodo: true })}>
                <p className="moduletitle">Sleep Tracker</p>
                <Image
                  className="newpic"
                  src="./Images/new.png"
                  roundedCircle
                />
              </span>
            </Col>
            <Col xs>
              <span onClick={() => this.setState({ modalShowTodo: true })}>
                <p className="moduletitle">New</p>
                <Image
                  className="newpic"
                  src="./Images/new.png"
                  roundedCircle
                />
              </span>
            </Col>
          </Row>
        </Container>
        ;
      </div>
    );
  }
}
export default App;
