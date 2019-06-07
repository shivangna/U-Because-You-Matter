import React, { Component } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Navbarr from "./pages/Navbarr.js";
import Journal from "./pages/journalModule/Journal.js";
import Mood from "./pages/moodModule/Mood.js";
import Challenges from "./pages/challengeModule/Challenges.js";
import TodoList from "./pages/todoModule/TodoList.js";
import Image from "react-bootstrap/Image";
import Api from "./pages/Api.js";

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

        {/* <div className="imadiv">im a div</div> */}
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
            <Journal
              className="modalbox"
              show={this.state.lgShowJournal}
              onHide={lgCloseJournal}
            />
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
            <Mood
              className="modalbox"
              show={this.state.lgShowMood}
              onHide={lgCloseMood}
            />
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
              className="modalbox"
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
                <div className="text">To Do</div>

                <Image
                  className="modalpic"
                  src="./Images/todo.png"
                  roundedCircle
                />
              </div>{" "}
            </span>
            <TodoList
              className="modalbox"
              show={this.state.lgShowTodo}
              onHide={lgCloseTodo}
            />
          </div>

          <div className="new">
            <span onClick={() => this.setState({ modalShowTodo: true })}>
              <div className="svg-wrapper">
                <svg height="40" width="250" xmlns="http://www.w3.org/2000/svg">
                  <rect className="shape" height="40" width="250" />
                </svg>
                <div className="text">Coming soon!</div>

                <Image
                  className="modalpic"
                  src="./Images/head.jpg"
                  roundedCircle
                />
              </div>{" "}
            </span>
          </div>
        </Container>

        <div class="footer">
          <p>
            <Api />
          </p>
          <p className="footertext">
            Made with 🧡 by Shivangna, Mike and Jocelyne!{" "}
          </p>
        </div>
        <div />
      </div>
    );
  }
}
export default App;
