import React from 'react';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

function countWords (incomingData) {
    incomingData.forEach(element => {
      console.log('element ', element)
      console.log('elements journal entry ', element)
      element['word_count'] = superCounter(element['journal_entry'])
    });
  }
  
  function superCounter(str) { 
    var words = str.trim().replace(/\s+/gi, ' ').split(' ').length; 
    console.log('number of words', str, words)
    return words;
  };  

  

class ChartViewer extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      timeseriesDs: {
        type: 'column2d',
        // renderAt: 'container',
        width: '600',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            caption: { text: 'Online Sales of a SuperStore in the US' },
            chart: {
                "caption": "Countries With Most Oil Reserves [2017-18]",
                "subCaption": "In MMbbl = One Million barrels",
                "xAxisName": "Country",
                "yAxisName": "Word Count",
                "numberSuffix": "",
                "theme": "fusion"
            },
            data: [
                {
                    "label": "2019-01-01",
                    "value": "201"
                },
                {
                    "label": "2019-02-01",
                    "value": "260"
                },
                {
                    "label": "2019-03-01",
                    "value": "180"
                }
            ],
        }
      }
    };
  }

  render() {
    const dataReceived= this.props.dataArray;

    return (
      <div>
        {this.state.timeseriesDs.dataSource.data ? (
          <ReactFC {...this.state.timeseriesDs} />
        ) : (
          'loading'
        )}
      </div>
    );
  }
}

export default ChartViewer;