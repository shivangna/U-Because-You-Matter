import React, { Component } from "react";
// import { BrowserRouter, Route, Redirect, Link, Switch } from "react-router-dom";
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
    modalShowJournal: false
    // modalShowMood: false,
    // modalShowChallenges: false,
    // modalShowTodo: false
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
                show={this.state.modalShowTodo}
                onHide={modalCloseTodo}
              />
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
