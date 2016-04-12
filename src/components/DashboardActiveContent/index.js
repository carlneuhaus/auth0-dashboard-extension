import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MetricSelector from '../MetricSelector';
import MetricContent from '../MetricContent';

var styles = require('./styles.css');

export default class DashboardActiveContent extends Component {

  render() {
    return (
      <div className={styles.root  + ' row'}>
        <div className="col-xs-3">
          <MetricSelector/>
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
