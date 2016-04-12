import React, { Component } from 'react';
import moment from 'moment';

import MetricSelector from '../MetricSelector';
import MetricContent from '../MetricContent';

import * as MetricKeys from '../../client/metricKeys';

var styles = require('./styles.css');

export default class DashboardActiveContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment().subtract(29, 'days'),
      endDate: moment()
    };
    this.selectionChanged.bind(this);
  }

  selectionChanged (e) {
    console.log('selection changing to', e)
  }

  dateRangeChanged(startDate, endDate) {
    this.setState({ startDate, endDate });
  }

  render() {
    return (
      <div className={styles.root  + ' row'}>
        <div className="col-xs-3">
          <MetricSelector onSelectionChanged={this.selectionChanged}/>
        </div>
        <div className="col-xs-9">
          <MetricContent
            title="Indentity Providers"
            {...this.state}
            onDateRangeChange={this.dateRangeChanged.bind(this)}
            />
        </div>
      </div>
    )
  }
}
