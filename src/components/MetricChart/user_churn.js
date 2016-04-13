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
            fillColor: "rgba(235, 84, 36, .1)",
            strokeColor: "rgba(235, 84, 36, 1)",
            pointColor: "rgba(235, 84, 36, 1)",
            pointStrokeColor: "rgba(235, 84, 36, 1)",
            pointHighlightFill: "rgba(235, 84, 36, 1)",
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
            fillColor: "rgba(22, 33, 77, .1)",
            strokeColor: "rgba(22, 33, 77, 1)",
            pointColor: "rgba(22, 33, 77, 1)",
            pointStrokeColor: "rgba(22, 33, 77, 1)",
            pointHighlightFill: "rgba(22, 33, 77, 1)",
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
