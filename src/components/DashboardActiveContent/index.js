import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MetricSelector from '../MetricSelector';
import MetricContent from '../MetricContent';

import * as MetricKeys from '../../client/metricKeys';

var styles = require('./styles.css');

export default class DashboardActiveContent extends Component {
  constructor(props) {
    super(props)
    this.selectionChanged.bind(this);
  }

  selectionChanged (e) {
    console.log('selection changing to', e)
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
            />
        </div>
      </div>
    )
  }
}
