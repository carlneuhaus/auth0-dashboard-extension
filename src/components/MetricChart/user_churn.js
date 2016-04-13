import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
import {Line as LineChart} from 'react-chartjs'


export default class UserChurn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSet: props.dataSet
    };
  }

  render() {
    var chartData = {
        labels: this.props.dataSet.dates,
        datasets: [
          {
            label: "Twitter",
            fillColor: "rgba(255, 154, 87, .1)",
            strokeColor: "rgba(255, 154, 87, 1)",
            pointColor: "rgba(255, 154, 87, 1)",
            pointStrokeColor: "rgba(255, 154, 87, 1)",
            pointHighlightFill: "rgba(255, 154, 87, 1)",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: this.props.dataSet.values.twitter
          },
          {
            label: "Facebook",
            fillColor: "rgba(255, 255, 255, 0)",
            strokeColor: "rgba(1, 180, 143, 1)",
            pointColor: "rgba(1, 180, 143, 1)",
            pointStrokeColor: "rgba(1, 180, 143, 1)",
            pointHighlightFill: "rgba(1, 180, 143, 1)",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: this.props.dataSet.values.facebook
          },
          {
            label: "Auth0",
            fillColor: "rgba(87, 154, 255, .1)",
            strokeColor: "rgba(87, 154, 255, 1)",
            pointColor: "rgba(82, 154, 255, 1)",
            pointStrokeColor: "rgba(82, 154, 255, 1)",
            pointHighlightFill: "rgba(82, 154, 255, 1)",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: this.props.dataSet.values.auth0
          }
        ]};

    var lineChartOptions = {
      responsive: true,
      height: 300,
      scaleBeginAtZero: true
    };

    return (<LineChart data={chartData} options={lineChartOptions} height="100" />)

  }

};
