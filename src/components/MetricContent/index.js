import React, { Component } from 'react';
import DateRangePicker from '../DateRangePicker';
import MetricChart from '../MetricChart';
import MetricTable from '../MetricTable';

const styles = require('./styles.css');

export default (props) => (
  <div className="">
    <div className="row">
      <h1 className={['col-xs-9', styles.title].join(' ')}>{props.title}</h1>
      <div className="col-xs-3"><DateRangePicker /></div>
    </div>

    <MetricChart />

    <MetricTable />

  </div>
);
