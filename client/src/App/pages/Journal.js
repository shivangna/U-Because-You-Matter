import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { Form, Modal, Button } from "react-bootstrap";
//import ChartViewer from "./wordgraph.js"
import ChartViewer from "./test.js"
import { parse } from "url";

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
let yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;

class Journal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      value:'',
      entry_today: {journal_entry: ""}
    };
  }

  renderTodaysJournal = (entries) => {
    entries.forEach (element => {
      let journalDateSpliced = element['journal_date'].split("T")[0];
      if (journalDateSpliced === today) {
        return element['journal_entry']
      } else {
        return null
      }
    })
  }

  componentDidMount() {
    this.getList();
  }

  getList = () => {
    fetch("/journal")
      .then(res => res.json())
      .then(results => {
        const entry_today = results.find((entry) => {
          const parsedEntryDate = new Date(entry.journal_date)
          const today = new Date()
          return parsedEntryDate.getDate() + 1 == today.getDate() && 
            parsedEntryDate.getFullYear() == today.getFullYear() && 
            parsedEntryDate.getMonth() == today.getMonth() 
        })
        
        this.setState({ entries: results})
        if (entry_today) {
          this.setState({ 
            entry_today: entry_today,
            value: entry_today.journal_entry
          })
        }
      });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch("/journal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        entry: this.state.value,
        date: today
      })
    })
    .then(res => res.json())
    .then(data => {
      this.getList();
    })
    .catch(err => console.log(err));
  }


  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <div className="App">
          <Jumbotron>
            <h1>Journal</h1>
            <p>
              <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Select a date</Form.Label>
                  <Form.Control as="select">
                    <option>Date</option>
                    <option>Date</option>
                    <option>Date</option>
                    <option>Date</option>
                    <option>Date</option>
                    <option>Date</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                <form onSubmit={this.handleSubmit}>
                <label> add your text 
                  <input type='text' value = {this.state.value} defaultValue={this.state.entry_today.journal_entry} onChange={this.handleChange} />
                </label>
                <input type ='submit' value = 'Submit' />
                </form>
                </Form.Group>
              </Form>
            </p>
            <ChartViewer data={this.state.dataArray}/>


            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>How is your day going?</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>

            <p />
          </Jumbotron>
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

export default Journal;
