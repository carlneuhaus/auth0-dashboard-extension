import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
import {Line as LineChart} from 'react-chartjs'

export default class LoginsPerSignupChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSet: props.dataSet
    };
  }

  render() {

    var chartData = this.props.dataSet;

    var chartData = this.props.dataSet.reduce(function(prev, curr){
      
      prev.labels.push(moment(curr.key).format('YYYY-MM-DD'));
      prev.datasets[0].data.push(curr.logins)
      prev.datasets[2].data.push(curr.signups)
      prev.datasets[1].data.push(curr.ratio);

      return prev;
    }, {
        labels:[],
        datasets: [
          {
            label: "Logins",
            fillColor: "rgba(235, 84, 36, .1)",
            strokeColor: "rgba(235, 84, 36, 1)",
            pointColor: "rgba(235, 84, 36, 1)",
            pointStrokeColor: "rgba(235, 84, 36, 1)",
            pointHighlightFill: "rgba(235, 84, 36, 1)",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: []
          },
          {
            label: "Signup Ratio",
            fillColor: "rgba(255, 255, 255, 0)",
            strokeColor: "rgba(1, 180, 143, 1)",
            pointColor: "rgba(1, 180, 143, 1)",
            pointStrokeColor: "rgba(1, 180, 143, 1)",
            pointHighlightFill: "rgba(1, 180, 143, 1)",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: []
          },
          {
            label: "Signups",
            fillColor: "rgba(22, 33, 77, .1)",
            strokeColor: "rgba(22, 33, 77, 1)",
            pointColor: "rgba(22, 33, 77, 1)",
            pointStrokeColor: "rgba(22, 33, 77, 1)",
            pointHighlightFill: "rgba(22, 33, 77, 1)",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: []
          }
        ]});

    var lineChartOptions = {
      responsive: true,
      height: 300,
      scaleBeginAtZero: true 
    };

    return (<LineChart data={chartData} options={lineChartOptions} height="100" />)

  }

};
