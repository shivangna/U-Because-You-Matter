import React, { Component } from "react";

// Quote Generator API

class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResult: null,
      author: "",
      text: "",
      isLoaded: false,
      bgColor: "#f99192",
      clickCount: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.shareOnTwitter = this.shareOnTwitter.bind(this);
  }

  handleClick() {
    this.generateQuote();
    this.changeColor();
  }

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
      {
        headers: {
          Accept: "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          apiResult: responseData.quotes,
          isLoaded: true,
          author: responseData.quotes[0].author,
          text: responseData.quotes[0].quote,
          quotesArrayLength: responseData.quotes.length
        });
      })
      .catch(error => this.setState({ error }));
  }

  generateQuote = () => {
    const chosenQuote = [];
    const quotes = this.state.apiResult;
    let randomNumber = Math.floor(
      Math.random() * this.state.apiResult.length + 1
    );

    quotes.forEach(function(element, index) {
      if (index === randomNumber) {
        chosenQuote.push(element);
      }
    });
    this.setState({
      text: chosenQuote[0].quote,
      author: chosenQuote[0].author
    });
  };

  changeColor = () => {
    const color = ["#385a7c", "#f97171", "#f99192", "#8ad6cc", "#b2eee6"];
    let i = this.state.clickCount;

    this.setState({
      clickCount: this.state.clickCount + 1
    });

    if (i < 4) {
      this.setState({
        bgColor: color[i]
      });
    } else if (i >= 4) {
      this.setState({
        bgColor: color[i],
        clickCount: 0
      });
    } else if (i === 0) {
      this.setState({
        clickCount: this.state.clickCount + 1,
        bgColor: color[i]
      });
    }
  };

  render() {
    return (
      <footer onClick={this.handleClick}>
        <div className="translucent-form-overlay">
          <style />
          <p id="text">
            {this.state.text}
            <span id="author"> - {this.state.author}</span>
          </p>
        </div>
      </footer>
    );
  }
}

export default Api;
