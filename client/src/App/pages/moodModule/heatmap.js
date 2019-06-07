import React, { Component } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "./heatmap.css";

class Heatmap extends Component {
  render() {
    const changeIncomingData = data => {
      let newData = [];
      data.forEach(element => {
        let newDate = element.mood_date.split("T")[0];
        newData.push({ date: newDate, mood: element.mood });
      });
      return newData;
    };
    let dataToRender = changeIncomingData(this.props.values);
    console.log("datatorender", dataToRender);
    return (
      <div className="heatmap">
        <CalendarHeatmap
          startDate={new Date("2019-01-01")}
          endDate={new Date("2019-08-31")}
          values={dataToRender}
          classForValue={value => {
            if (!value) {
              return "color-empty";
            }
            return `color-${value.mood}`;
          }}
        />
      </div>
    );
  }
}

export default Heatmap;
