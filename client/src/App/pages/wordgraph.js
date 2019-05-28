import React, { Component } from "react";
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

// const data = [
//     {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
//     {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
//     {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
//     {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
//     {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
//     {name: 'Pae F', uv: 2390, pv: 3800, amt: 2500},
//     {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
// ];



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

class Wordgraph extends Component {
    render () {
      const dataReceived= this.props.dataArray;
      console.log('ths is data received', dataReceived)
      const newData = countWords(dataReceived)
      console.log('newdata', newData)
      return (
          <AreaChart width={600} height={400} data={newData}
              margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey='journal_date' type='number' scale='time' domain={['dataMin', 'dataMax']}  />
          <YAxis/>
          <Tooltip/>
          <Area type='monotone' dataKey='word_count' stroke='#8884d8' fill='#8884d8' />
        </AreaChart>
      );
    }
}

export default Wordgraph;




