import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class Journal extends Component {
    render() {
        return (
            <Modal {...this.props} 
                   size="lg"
                   aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    <h1> Journal</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <textarea placeholder = "what's in your heart" />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick = {this.props.onHide}> Close </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default Journal;