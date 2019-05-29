import React, { Component } from "react";
import loadLiquidFillGauge from "./liquidFillGauge";
// import d3 from "http://d3js.org/d3.v3.min.js";
import * as d3 from "d3";

export default class LiquidGauge extends Component {
  constructor(props) {
    super(props);
  }

  gauge1 = loadLiquidFillGauge("fillgauge1", 55);

  NewValue = () => {
    if (Math.random() > 0.5) {
      return Math.round(Math.random() * 100);
    } else {
      return (Math.random() * 100).toFixed(1);
    }
  };

  render() {
    return (
      <div>
        <svg
          id="fillgauge1"
          width="97%"
          height="250"
          onclick="gauge1.update(NewValue());"
          style={{ fontFamily: "Helvetica", fontWeight: "bold" }}
        />
      </div>
    );
  }
}
