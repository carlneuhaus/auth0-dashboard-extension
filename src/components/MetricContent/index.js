import React, { Component } from 'react';
import MetricDateRangePicker from '../MetricDateRangePicker';
import MetricChart from '../MetricChart';
import MetricTable from '../MetricTable';
import moment from 'moment';
const styles = require('./styles.css');

export default (props) => (
  <div>
    <div className="">
      <h1 className={styles.title}>{props.title}</h1>
    </div>
    <div>
      <MetricDateRangePicker startDate={props.startDate} endDate={props.endDate} onDateRangeChange={props.onDateRangeChange}/>
    </div>

    <MetricChart />

    <MetricTable />

  </div>
);
