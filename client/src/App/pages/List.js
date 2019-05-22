import React, { Component } from "react";

class List extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch("/api/getList", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(list => this.setState({ list }));
  };

  render() {
    // const { list } = this.state;
    // const handleClose = () => {
    //   props.history.push(props.basePath);
    // };

    return (
      <div className="w3-modal" style={{ display: "block" }}>
        <div className="w3-modal-content">
          <div className="w3-container">
            <h1>List of Items</h1>
            <div>
              {this.state.list.map(item => {
                return <div>{item}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
