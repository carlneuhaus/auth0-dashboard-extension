import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as MetricKeys from '../../client/metricKeys';

const MenuItem = (props) => {
  var activeClass = props.isActive ? 'active' : '';
  return <a href="#" onClick={props.onClick} className={"list-group-item " + activeClass}>{props.name}</a>
}

export default class MetricSelector extends Component {
  onClick(metricKey) {
    if (this.props.onSelectionChanged) {
      this.props.onSelectionChanged(metricKey);
    }
  }

  render() {
    return (
      <ul className="list-group">
        <MenuItem name="Logins Per Day" isActive={this.props.metricKey === MetricKeys.LOGINS_PER_DAY} onClick={this.onClick.bind(this, MetricKeys.LOGINS_PER_DAY)}/>
        <MenuItem name="Logins Per Signup" isActive={this.props.metricKey === MetricKeys.LOGINS_PER_SIGNUP} onClick={this.onClick.bind(this, MetricKeys.LOGINS_PER_SIGNUP)}/>
        <MenuItem name="Geolocation" isActive={this.props.metricKey === MetricKeys.GEOLOCATION} onClick={this.onClick.bind(this, MetricKeys.GEOLOCATION)}/>
        <MenuItem name="Identity Providers" isActive={this.props.metricKey === MetricKeys.IDENTITY_PROVIDERS} onClick={this.onClick.bind(this, MetricKeys.IDENTITY_PROVIDERS)}/>
        <MenuItem name="Logs" isActive={this.props.metricKey === MetricKeys.LOGS} onClick={this.onClick.bind(this, MetricKeys.LOGS)}/>
      </ul>
    )
  }
}
