import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
import {Line as LineChart} from 'react-chartjs'

export default class LoginsPerDayChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSet: props.dataSet
    };
  }

  render() {
    var avg = this.props.dataSet.avg;
    
    var chartData = this.props.dataSet.aggregations.reduce(function(prev, curr){
      
      prev.labels.push(moment(curr.key).format('YYYY-MM-DD'));
      prev.datasets[0].data.push(_.sumBy(curr.buckets, 'count')/curr.buckets.length)
      prev.datasets[2].data.push(_.sumBy(curr.buckets, 'count'))
      prev.datasets[1].data.push(avg);

      return prev;
    }, {
        labels:[],
        datasets: [
          {
            label: "Daily AVG",
            fillColor: "rgba(235, 84, 36, .1)",
            strokeColor: "rgba(235, 84, 36, 1)",
            pointColor: "rgba(235, 84, 36, 1)",
            pointStrokeColor: "rgba(235, 84, 36, 1)",
            pointHighlightFill: "rgba(235, 84, 36, 1)",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: []
          },
          {
            label: "AVG",
            fillColor: "rgba(255, 255, 255, 0)",
            strokeColor: "rgba(1, 180, 143, 1)",
            pointColor: "rgba(1, 180, 143, 1)",
            pointStrokeColor: "rgba(1, 180, 143, 1)",
            pointHighlightFill: "rgba(1, 180, 143, 1)",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: []
          },
          {
            label: "Total Logins",
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
