import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import MetricSelector from '../MetricSelector';
import MetricContent from '../MetricContent';

import * as MetricKeys from '../../client/metricKeys';
import DataSource from '../../client/services/dataSource';

var styles = require('./styles.css');

export default class DashboardActiveContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentMetric: MetricKeys.LOGINS_PER_DAY,
      isPending: true
    }

    this.dataSource = new DataSource();
  }

  selectionChanged (selectedMetric) {
    this.setState({ isPending: true})

    var dataPromise = this.dataSource.get(selectedMetric);
    var self = this;

    dataPromise.then(function (data) {
      self.setState({ isPending: false, dataSet: data});
    }).fail(function () {
      console.error('handle error');
    });
  }

  render() {
    return (
      <div className={styles.root  + ' row'}>
        <div className="col-xs-3">
          <MetricSelector initialMetric={MetricKeys.LOGINS_PER_DAY} onSelectionChanged={this.selectionChanged.bind(this)}/>
        </div>
        <div className="col-xs-9">
          <MetricContent
            isPending={this.state.isPending}
            dataSet={this.state.dataSet}
            title="Indentity Providers"
            />
        </div>
      </div>
    )
  }
}
