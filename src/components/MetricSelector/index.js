import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as MetricKeys from '../../client/metricKeys';
import metricInfo from '../../client/metricInfo';

var styles = require('./styles.css');

const MenuItem = (props) => {
  var activeClass = props.isActive ? 'active' : '';
  return (
    <a href="#" onClick={props.onClick} className={[styles.menuItem, "list-group-item " + activeClass].join(' ')}>
      <i className='icon-budicon-497 icon'/>
      <span className='title'>{props.name}</span>
    </a>
  )
}

export default class MetricSelector extends Component {
  onClick(metricKey) {
    if (this.props.onSelectionChanged) {
      this.props.onSelectionChanged(metricKey);
    }
  }

  renderMenuItem(metricKey) {
    return <MenuItem
            key={metricKey}
            name={metricInfo[metricKey].title}
            isActive={this.props.metricKey === metricKey}
            onClick={this.onClick.bind(this, metricKey)} />
  }
  render() {

    return (
      <ul className="list-group chart-selector">
        {[
          MetricKeys.LOGINS_PER_DAY,
          MetricKeys.LOGINS_PER_SIGNUP,
          MetricKeys.IDENTITY_PROVIDERS,
          MetricKeys.CONNECTION_CHURN,
          MetricKeys.GEOLOCATION,
        ].map( this.renderMenuItem.bind(this) ) }
      </ul>
    )
  }
}
