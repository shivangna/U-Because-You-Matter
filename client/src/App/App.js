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
import Api from "./pages/Api.js";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      lgShow: false
    };
  }

  render() {
    let lgCloseJournal = () => this.setState({ lgShowJournal: false });
    let lgCloseMood = () => this.setState({ lgShowMood: false });
    let lgCloseChallenges = () => this.setState({ lgShowChallenges: false });
    let lgCloseTodo = () => this.setState({ lgShowTodo: false });

    return (
      <div>
        <Navbarr />
        <div className="imadiv">im a div</div>
        <Container>
          <div className="journal">
            <span onClick={() => this.setState({ lgShowJournal: true })}>
              <div className="svg-wrapper">
                <svg height="40" width="250" xmlns="http://www.w3.org/2000/svg">
                  <rect className="shape" height="40" width="250" />
                </svg>
                <div className="text">Journal</div>
                <Image
                  className="modalpic"
                  src="./Images/journal.png"
                  roundedCircle
                  alt="Journal"
                />
              </div>{" "}
            </span>
            <Journal show={this.state.lgShowJournal} onHide={lgCloseJournal} />
          </div>

          <div className="mood">
            <span onClick={() => this.setState({ lgShowMood: true })}>
              <div className="svg-wrapper">
                <svg height="40" width="250" xmlns="http://www.w3.org/2000/svg">
                  <rect className="shape" height="40" width="250" />
                </svg>
                <div className="text">Mood</div>

                <Image
                  className="modalpic"
                  src="./Images/mood.png"
                  roundedCircle
                />
              </div>{" "}
            </span>
            <Mood show={this.state.lgShowMood} onHide={lgCloseMood} />
          </div>

          <div className="challenges">
            <span onClick={() => this.setState({ lgShowChallenges: true })}>
              <div className="svg-wrapper">
                <svg height="40" width="250" xmlns="http://www.w3.org/2000/svg">
                  <rect className="shape" height="40" width="250" />
                </svg>
                <div className="text">Challenges</div>

                <Image
                  className="modalpic"
                  src="./Images/challenges.png"
                  roundedCircle
                />
              </div>{" "}
            </span>

            <Challenges
              show={this.state.lgShowChallenges}
              onHide={lgCloseChallenges}
            />
          </div>

          <div className="todo">
            <span onClick={() => this.setState({ lgShowTodo: true })}>
              <div className="svg-wrapper">
                <svg height="40" width="250" xmlns="http://www.w3.org/2000/svg">
                  <rect className="shape" height="40" width="250" />
                </svg>
                <div className="text">Todo</div>

                <Image
                  className="modalpic"
                  src="./Images/todo.png"
                  roundedCircle
                />
              </div>{" "}
            </span>
            <TodoList show={this.state.lgShowTodo} onHide={lgCloseTodo} />
          </div>

          <div className="new">
            <span onClick={() => this.setState({ modalShowTodo: true })}>
              <div className="svg-wrapper">
                <svg height="40" width="250" xmlns="http://www.w3.org/2000/svg">
                  <rect className="shape" height="40" width="250" />
                </svg>
                <div className="text">New</div>

                <Image
                  className="modalpic"
                  src="./Images/new.png"
                  roundedCircle
                />
              </div>{" "}
              <Api className="api" />
            </span>
          </div>
        </Container>

        <div />
      </div>
    );
  }
}
export default App;
