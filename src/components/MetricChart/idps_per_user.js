
import React, { Component } from 'react';
import _ from 'lodash';
import {Bar as BarChart} from 'react-chartjs'

export default class IdPsPerUserChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSet: props.dataSet
    };
  }

  render() {

    var chartData = this.props.dataSet.aggregations.reduce(function(prev, current){

      current.buckets.forEach(function(bucket){
        prev[bucket.key] = prev[bucket.key] || 0;
        prev[bucket.key] += bucket.count;
      });

      return prev;
      
    }, {});

    chartData = _.keys(chartData).map(function(key){
      return {
        key:key,
        value:chartData[key]
      };
    })

    chartData = chartData.reduce(function(prev, curr){
      
      prev.labels.push(curr.key);
      prev.datasets[0].data.push(curr.value)

      return prev;
    }, {
        labels:[],
        datasets: [
          {
            label: "Provider",
            fillColor: "rgba(255, 154, 87, .1)",
            strokeColor: "rgba(255, 154, 87, 1)",
            pointColor: "rgba(255, 154, 87, 1)",
            pointStrokeColor: "rgba(255, 154, 87, 1)",
            pointHighlightFill: "rgba(255, 154, 87, 1)",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: []
          }
        ]});

    var chartOptions = {
      responsive: true,
      height: 300,
      scaleBeginAtZero: true 
    };

    return (<BarChart data={chartData} options={chartOptions} height="100" />)

  }

};
