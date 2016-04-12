import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as MetricKeys from '../../client/metricKeys';

const MenuItem = (props) => {
  var activeClass = props.isActive ? 'active' : '';
  return <a href="#" onClick={props.onClick} className={"list-group-item " + activeClass}>{props.name}</a>
}

export default class MetricSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMetric: props.initialMetric
    };

    this.onSelectionChanged = props.onSelectionChanged;
  }

  onClick(metricKey) {
    this.setState({ currentMetric: metricKey });

    if (this.onSelectionChanged) {
      this.onSelectionChanged(metricKey);
    }
  }

  render() {
    return (
      <ul className="list-group">
        <MenuItem name="Logins Per Day" isActive={this.state.currentMetric === MetricKeys.LOGINS_PER_DAY} onClick={this.onClick.bind(this, MetricKeys.LOGINS_PER_DAY)}/>
        <MenuItem name="Logins Per Signup" isActive={this.state.currentMetric === MetricKeys.LOGINS_PER_SIGNUP} onClick={this.onClick.bind(this, MetricKeys.LOGINS_PER_SIGNUP)}/>
        <MenuItem name="Geolocation" isActive={this.state.currentMetric === MetricKeys.GEOLOCATION} onClick={this.onClick.bind(this, MetricKeys.GEOLOCATION)}/>
        <MenuItem name="Identity Providers" isActive={this.state.currentMetric === MetricKeys.IDENTITY_PROVIDERS} onClick={this.onClick.bind(this, MetricKeys.IDENTITY_PROVIDERS)}/>
        <MenuItem name="Logs"/>
      </ul>
    )
  }
}
