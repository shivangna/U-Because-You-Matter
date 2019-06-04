import React from "react";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

function superCounter(str) {
  var words = str
    .trim()
    .replace(/\s+/gi, " ")
    .split(" ").length;
  return words;
}

class ChartViewer extends React.Component {
  render() {
    const graphInfo = {
      timeseriesDs: {
        type: "column2d",
        width: "600",
        height: "400",
        dataFormat: "json",
        dataSource: {
          caption: { text: "Online Sales of a SuperStore in the US" },
          chart: {
            xAxisName: "Date",
            yAxisName: "Word Count",
            numberSuffix: "",
            theme: "fusion"
          },
          data: this.props.dataArray
            .sort(function(a, b) {
              return new Date(a.journal_date) - new Date(b.journal_date);
            })
            .map(function(entry) {
              return {
                label: entry.journal_date.slice(0, 10),
                value: superCounter(entry.journal_entry)
              };
            })
        }
      }
    };

    return (
      <div>
        {graphInfo.timeseriesDs.dataSource.data ? (
          <ReactFC {...graphInfo.timeseriesDs} />
        ) : (
          "loading"
        )}
      </div>
    );
  }
}

export default ChartViewer;
