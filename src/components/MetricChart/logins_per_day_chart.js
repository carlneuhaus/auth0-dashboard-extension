import React, { Component } from 'react';

var LineChart = require('react-d3-basic').LineChart;

export default class LoginsPerDayChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSet: props.dataSet
    };
  }

  render() {
    var chartData = this.props.dataSet.aggregations.map(function(day){
      return {
        time:new Date(day.key),
        value:day.buckets[0].count
      }
    });

    var width = 700,
      height = 300,
      margins = {left: 100, right: 100, top: 50, bottom: 50},
      title = "User sample",

    chartSeries = [
      {
        field: 'value',
        name: 'Count',
        color: '#FF0000'
      }
    ],

    x = function(d) {
      return d.time;
    }


    return (<div>
      <h2>Logins/day</h2>

        <LineChart
          margins= {margins}
          title={title}
          data={chartData}
          width={width}
          height={height}
          chartSeries={chartSeries}
          x={x}
        />

    </div>)

  }

};
