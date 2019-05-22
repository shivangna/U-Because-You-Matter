import React, { Component } from "react";
import Journal from "./Journal.js";
import Mood from "./Mood.js";

class Home extends Component {
    state = {
        modalShow: false
      };
    render() {
        let modalClose = () => this.setState({ modalShow: false });
        return (
            <div>
                <span onClick={() => this.setState({ modalShow: true })}>journal</span>
                <Journal show={this.state.modalShow} onHide={modalClose} />
                <span onClick={() => this.setState({ modalShow: true })}>Mood</span>
                <Mood show={this.state.modalShow} onHide={modalClose} />
            </div>
        )
    }
}

export default Home;