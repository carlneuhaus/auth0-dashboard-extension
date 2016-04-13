
import React, { Component } from 'react';
import _ from 'lodash';
var BarChart = require('react-d3-basic').BarChart;

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

    var data = _.keys(chartData).map(function(key){
      return {
        key:key,
        value:chartData[key]
      };
    })

    var width = 700,
    height = 400,
    title = "Bar Chart",
    chartSeries = [
      {
        field: 'value',
        name: '# Logins'
      }
    ],
    x = function(d) {
      return d.key;
    },
    xScale = 'ordinal',
    xLabel = "Letter",
    yLabel = "Frequency",
    yTicks = [10];



    return (<div>
              <BarChart
                title= {title}
                data= {data}
                width= {width}
                height= {height}
                chartSeries = {chartSeries}
                x= {x}
                xLabel= {xLabel}
                xScale= {xScale}
                yTicks= {yTicks}
                yLabel = {yLabel}
              />
            </div>)

  }

};
