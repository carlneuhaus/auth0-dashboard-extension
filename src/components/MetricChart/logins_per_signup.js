import React, { Component } from 'react';
import _ from 'lodash';

var LineChart = require('react-d3-basic').LineChart;

export default class LoginsPerSignupChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSet: props.dataSet
    };
  }

  render() {

  var chartData = this.props.dataSet;


  var width = 700,
      height = 300,
      margins = {left: 100, right: 100, top: 50, bottom: 50},
      title = "User sample",

    chartSeries = [
      {
        field: 'logins',
        name: 'Login',
        color: '#FF0000'
      },
      {
        field: 'signups',
        name: 'Signups',
        color: '#00FF00'
      },
      {
        field: 'ratio',
        name: 'Ratio',
        color: '#0000FF'
      }
    ],

    x = function(d) {
      return new Date(d.key);
    }


    return (<div>
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
