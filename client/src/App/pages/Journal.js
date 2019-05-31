import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { Form, Modal, Button } from "react-bootstrap";
//import ChartViewer from "./wordgraph.js"
import ChartViewer from "./final-wordgraph.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LiquidGauge from "./gauge";

// Format the date input to MM/DD/YYYY

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

  // Sets and format dates and also get journal entry for the chosen day

  handleDateChange = date => {
    this.setState({
      startDate: date
    });
    let parsedEntryDate = new Date(this.state.entry_today.journal_date);
    let today = new Date(this.state.startDate);
    if (
      parsedEntryDate.getDate() + 1 === today.getDate() &&
      parsedEntryDate.getFullYear() === today.getFullYear() &&
      parsedEntryDate.getMonth() === today.getMonth()
    ) {
      return;
    }
    this.getList();
  };

  //Query through all entries of journal and display for the chosen date

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

  // Call backend to get journal entries and set State

  componentDidUpdate() {
    let parsedEntryDate = new Date(this.state.entry_today.journal_date);
    let today = new Date(this.state.startDate);
    if (
      parsedEntryDate.getDate() + 1 === today.getDate() &&
      parsedEntryDate.getFullYear() === today.getFullYear() &&
      parsedEntryDate.getMonth() === today.getMonth()
    ) {
      return;
    }
    this.getList();
  }
  // componentDidUpdate() {
  //   let parsedEntryDate = new Date(this.state.entry_today.journal_date)
  //   let today = new Date(this.state.startDate)
  //   console.log('parsed entry date, today', parsedEntryDate, today)
  //   if (parsedEntryDate.getDate() + 1 == today.getDate() &&
  //     parsedEntryDate.getFullYear() == today.getFullYear() &&
  //     parsedEntryDate.getMonth() == today.getMonth() ) {
  //       return
  //     }
  //   this.getList()
  // }

  getList = () => {
    fetch("/journal")
      .then(res => res.json())
      .then(results => {
        let entry_today = results.find(entry => {
          let parsedEntryDate = new Date(entry.journal_date);
          let today = new Date(this.state.startDate);

          //console.log('parsed entry date, today', parsedEntryDate, today)
          return (
            parsedEntryDate.getDate() + 1 === today.getDate() &&
            parsedEntryDate.getFullYear() === today.getFullYear() &&
            parsedEntryDate.getMonth() === today.getMonth()
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

  // Post method to save journal entry to DB
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

  renderFeeling = () => {
    let sum = 0;

    if (this.state.entry_today.hasOwnProperty("emotion")) {
      const arrKey = Object.values(JSON.parse(this.state.entry_today.emotion));

      arrKey.forEach(element => {
        sum += element;
      });
      let emotionsObj = JSON.parse(this.state.entry_today.emotion);
      let emotionGauges = [];
      for (let key in emotionsObj) {
        let emotionValue = emotionsObj[key] * (100 / sum);
        emotionGauges.push(
          <div key={key}>
            {key}
            <LiquidGauge key={key} emotion={emotionValue} />
          </div>
        );
      }
      return <div> {emotionGauges} </div>;
    }
  };

  render() {
    return (
      <Modal
        className="journalcomponent"
        size="lg"
        show={this.props.show}
        onHide={this.props.onHide}
      >
        <div>
          <h1 className="tittle">Journal</h1>

          <Form>
            <Form.Group
              controlId="exampleForm.ControlTextarea1"
              onSubmit={this.handleSubmit}
            >
              <DatePicker
                className="datepicker"
                selected={this.state.startDate}
                onChange={this.handleDateChange}
              />
              <Form.Label>How is your day going?</Form.Label>{" "}
              <Form.Control
                classname="journalbox"
                placeholder="How is your day going?"
                as="textarea"
                rows="5"
                type="text"
                value={this.state.value}
                defaultValue={this.state.entry_today.journal_entry}
                onChange={this.handleChange}
              />
              <Button
                className="journalsubmit"
                variant="primary"
                size="lg"
                block
                type="submit"
                value="Submit"
              >
                Submit{" "}
              </Button>
            </Form.Group>

            <div className="LiquidFillGauge">{this.renderFeeling()}</div>

            <ChartViewer className="wordcount" dataArray={this.state.entries} />
          </Form>
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Journal;
