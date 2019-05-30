import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { Form, Modal, Button } from "react-bootstrap";
//import ChartViewer from "./wordgraph.js"
import ChartViewer from "./final-wordgraph.js";
import { parse } from "url";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
      value: "",
      entry_today: { journal_entry: "" },
      startDate: new Date()
    };
  }

  handleDateChange = date => {
    this.setState({
      startDate: date
    });
  };

  renderTodaysJournal = entries => {
    entries.forEach(element => {
      let journalDateSpliced = element["journal_date"].split("T")[0];
      if (journalDateSpliced === this.state.startDate) {
        return element["journal_entry"];
      } else {
        return null;
      }
    });
  };

  componentDidMount() {
    this.getList();
  }

  componentDidUpdate() {
    let parsedEntryDate = new Date(this.state.entry_today.journal_date);
    let today = new Date(this.state.startDate);
    console.log("parsed entry date, today", parsedEntryDate, today);
    if (
      parsedEntryDate.getDate() + 1 == today.getDate() &&
      parsedEntryDate.getFullYear() == today.getFullYear() &&
      parsedEntryDate.getMonth() == today.getMonth()
    ) {
      return;
    }
    this.getList();
  }

  getList = () => {
    fetch("/journal")
      .then(res => res.json())
      .then(results => {
        let entry_today = results.find(entry => {
          let parsedEntryDate = new Date(entry.journal_date);
          let today = new Date(this.state.startDate);
          console.log("parsed entry date, today", parsedEntryDate, today);
          return (
            parsedEntryDate.getDate() + 1 == today.getDate() &&
            parsedEntryDate.getFullYear() == today.getFullYear() &&
            parsedEntryDate.getMonth() == today.getMonth()
          );
        });

        this.setState({ entries: results });
        if (entry_today) {
          this.setState({
            entry_today: entry_today,
            value: entry_today.journal_entry
          });
        } else {
          this.setState({
            value: ""
          });
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
        date: this.state.startDate
      })
    })
      .then(res => res.json())
      .then(data => {
        this.getList();
      })
      .catch(err => console.log(err));
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <Modal size="lg" show={this.props.show} onHide={this.props.onHide}>
        <div className="App">
          <Jumbotron>
            <h1>Journal</h1>

            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleDateChange}
            />

            <Form>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <form onSubmit={this.handleSubmit}>
                  <label>
                    {" "}
                    add your text
                    <input
                      type="text"
                      value={this.state.value}
                      defaultValue={this.state.entry_today.journal_entry}
                      onChange={this.handleChange}
                    />
                  </label>
                  <input type="submit" value="Submit" />
                </form>
              </Form.Group>
              <ChartViewer dataArray={this.state.entries} />
            </Form>
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
