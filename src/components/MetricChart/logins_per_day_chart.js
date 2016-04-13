import React, { Component } from 'react';
import _ from 'lodash';
var LineChart = require('react-d3-basic').LineChart;

export default class LoginsPerDayChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSet: props.dataSet
    };
  }

  render() {
    var avg = this.props.dataSet.avg;
    var chartData = this.props.dataSet.aggregations.map(function(day){
      return {
        time:new Date(day.key),
        value:_.sumBy(day.buckets, 'count')/day.buckets.length,
        avg: avg
      }
    });

    var width = 700,
      height = 300,
      margins = {left: 100, right: 100, top: 50, bottom: 50},
      title = "User sample",
      xScale = 'time',

    chartSeries = [
      {
        field: 'value',
        name: 'Count',
        color: '#FF0000'
      },
      {
        field: 'avg',
        name: 'Avg',
        color: '#00FF00'
      }
    ],

    x = function(d) {
      return d.time;
    }


    return (<div>
        <LineChart
          margins= {margins}
          title={title}
          data={chartData}
          width={width}
          height={height}
          chartSeries={chartSeries}
          xScale= {xScale}
          x={x}
        />

    </div>)

  }

};
