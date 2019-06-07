import React, { Component } from "react";
import { Form, Modal, Button } from "react-bootstrap";
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
      startDate: this.getToday()
    };
  }

  getToday = () => {
    return new Date().toLocaleDateString("en-ca");
  };

  // Sets and format dates and also get journal entry for the chosen day
  handleDateChange = date => {
    this.setState(
      {
        startDate: date.toLocaleDateString("en-ca")
      },
      () => {
        this.getList();
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

  //Render all emotions using Liquid Gauge graphs based on weighted average
  renderFeeling = () => {
    let sum = 0;
    let emotionGauges = [];

    if (this.state.entry_today.hasOwnProperty("emotion")) {
      const arrValues = Object.values(
        JSON.parse(this.state.entry_today.emotion)
      );

      arrValues.forEach(element => {
        sum += element;
      });

      let weightedSum = 100 / sum;
      let emotionsObj = JSON.parse(this.state.entry_today.emotion);

      if (emotionsObj["joy"]) {
        emotionGauges.push(
          <div style={{ color: "#f4d24f" }}>
            JOY
            <LiquidGauge
              key={"joy"}
              emotion={emotionsObj["joy"] * weightedSum}
            />
          </div>
        );
      }

      if (emotionsObj["sadness"]) {
        emotionGauges.push(
          <div style={{ color: "blue" }}>
            SADNESS
            <LiquidGauge
              key={"sadness"}
              emotion={emotionsObj["sadness"] * weightedSum}
            />
          </div>
        );
      }

      if (emotionsObj["fear"]) {
        emotionGauges.push(
          <div style={{ color: "purple" }}>
            FEAR
            <LiquidGauge
              key={"fear"}
              emotion={emotionsObj["fear"] * weightedSum}
            />
          </div>
        );
      }

      if (emotionsObj["anger"]) {
        emotionGauges.push(
          <div style={{ color: "red" }}>
            ANGER
            <LiquidGauge
              key={"anger"}
              emotion={emotionsObj["anger"] * weightedSum}
            />
          </div>
        );
      }

      if (emotionsObj["disgust"]) {
        emotionGauges.push(
          <div style={{ color: "green" }}>
            DISGUST
            <LiquidGauge
              key={"disgust"}
              emotion={emotionsObj["disgust"] * weightedSum}
            />
          </div>
        );
      }
      return <div> {emotionGauges} </div>;
    }
  };

  getList = () => {
    fetch("/journal")
      .then(res => res.json())
      .then(results => {
        let entry_today = results.find(
          entry => entry.journal_date.slice(0, 10) === this.state.startDate
        );
        this.setState({
          entries: results,
          entry_today: entry_today || "",
          value: entry_today ? entry_today.journal_entry : ""
        });
      })
      .then(() => {
        this.renderFeeling();
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

  render() {
    const selected = ymdToDate(this.state.startDate);
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
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <DatePicker
                className="datepicker"
                selected={selected}
                onChange={this.handleDateChange}
              />

              <Form.Control
                className="journalbox"
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
                onClick={e => {
                  this.handleSubmit(e);
                }}
              >
                Submit{" "}
              </Button>
            </Form.Group>

            <div className="LiquidFillGauge">{this.renderFeeling()}</div>

            <ChartViewer className="wordcount" dataArray={this.state.entries} />
          </Form>
        </div>
        <Modal.Footer>
          <Button className="close" onClick={this.props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Journal;

function ymdToDate(date) {
  const [year, month, day] = date.split("-");

  return new Date(year, month - 1, day);
}
