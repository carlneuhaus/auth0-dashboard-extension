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
      isPending: true,
      dataSet: null
    }

    this.dataSource = new DataSource();
  }

  componentDidMount() {
    this.fetchData(this.state.currentMetric);
  }
  
  fetchData (metric) {
    this.setState({ isPending: true });

    if (this.serverRequest) {
      console.log('aborting pending request')
      this.serverRequest.abort();
    }

    this.serverRequest = this.dataSource.get(metric);

    this.serverRequest.then(function (data) {
      console.log(data)
      this.setState({ isPending: false, dataSet: data});
      this.serverRequest = null;
    }.bind(this)).fail(function (e) {
      if (e.statusText !== 'abort'){
        console.error('handle error');
      }
    });
  }

  selectionChanged (selectedMetric) {
    this.fetchData(selectedMetric);
  }

  render() {
    console.log(this.state);
    return (
      <div className={styles.root  + ' row'}>
        <div className="col-xs-3">
          <MetricSelector initialMetric={MetricKeys.LOGINS_PER_DAY} onSelectionChanged={this.selectionChanged.bind(this)}/>
        </div>
        <div className="col-xs-9">
          <MetricContent
            isPending={this.state.isPending}
            dataSet={this.state.dataSet}
            metricKey={this.state.currentMetric}
            title="Indentity Providers"
            />
        </div>
      </div>
    )
  }
}
