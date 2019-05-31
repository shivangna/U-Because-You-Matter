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
      entry_today: { journal_entry: "", emotion: "{}" },
      startDate: new Date()
    };
  }

  // Sets and format dates and also get journal entry for the chosen day

  handleDateChange = date => {
    // let promiseDate = new Promise((resolve, reject) => {
    //   resolve(
    //     this.setState({
    //       startDate: date
    //     })
    //   );
    // });
    // promiseDate.then(() => {
    //   let parsedEntryDate = new Date(this.state.entry_today.journal_date);
    //   let today = new Date(this.state.startDate);
    //   if (
    //     parsedEntryDate.getDate() + 1 === today.getDate() &&
    //     parsedEntryDate.getFullYear() === today.getFullYear() &&
    //     parsedEntryDate.getMonth() === today.getMonth()
    //   ) {
    //     return;
    //   }
    //   this.getList();
    // });
    // promiseDate.then(() => {
    //   this.renderFeeling();
    // });

    this.setState(
      {
        startDate: date
      },
      () => {
        let parsedEntryDate = new Date(this.state.entry_today.journal_date);
        let today = new Date(this.state.startDate);
        if (
          parsedEntryDate.getDate() + 1 === today.getDate() &&
          parsedEntryDate.getFullYear() === today.getFullYear() &&
          parsedEntryDate.getMonth() === today.getMonth()
        ) {
          return;
        }
        this.getList(() => {
          this.renderFeeling(this.state.entry_today);
          this.forceUpdate();
        });
      }
    );
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

  // componentDidUpdate() {
  //   let parsedEntryDate = new Date(this.state.entry_today.journal_date);
  //   let today = new Date(this.state.startDate);
  //   if (
  //     parsedEntryDate.getDate() + 1 === today.getDate() &&
  //     parsedEntryDate.getFullYear() === today.getFullYear() &&
  //     parsedEntryDate.getMonth() === today.getMonth()
  //   ) {
  //     return;
  //   }
  //   this.getList();
  //   this.renderFeeling();
  // }
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

  renderFeeling = entryToday => {
    let sum = 0;
    let emotionGauges = [];

    if (entryToday.hasOwnProperty("emotion")) {
      const arrValues = Object.values(JSON.parse(entryToday.emotion));

      arrValues.forEach(element => {
        sum += element;
      });

      let emotionsObj = JSON.parse(entryToday.emotion);

      for (let key in emotionsObj) {
        let emotionValue = emotionsObj[key] * 100;
        console.log("entry_today: ", entryToday.journal_date);
        console.log("value: ", key, emotionValue);
        emotionGauges.push(
          <div key={key}>
            {key}
            <LiquidGauge emotion={emotionValue} />
          </div>
        );
      }
      return <div> {emotionGauges} </div>;
    }
  };

  getList = cb => {
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
          this.setState(
            {
              entry_today: entry_today,
              value: entry_today.journal_entry
            },
            cb
          );
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
      .then(data => {
        this.renderFeeling(this.state.entry_today);
      })
      .catch(err => console.log(err));
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    let emotionsObj = JSON.parse(this.state.entry_today.emotion);
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

              <div>{this.renderFeeling(this.state.entry_today)}</div>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>How is your day going?</Form.Label>
                <Form.Control as="textarea" rows="3" />
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
