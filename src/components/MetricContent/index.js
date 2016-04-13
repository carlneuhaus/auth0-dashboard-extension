import React, { Component } from 'react';
import MetricDateRangePicker from '../MetricDateRangePicker';
import MetricChart from '../MetricChart';
import MetricTable from '../MetricTable';
import * as MetricKeys from '../../client/metricKeys';
import moment from 'moment';
const styles = require('./styles.css');

export default class MetricContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPending: props.isPending,
      title: props.title
    };
  }

  metricExplanation(key) {
    switch(key) {
      case MetricKeys.LOGINS_PER_DAY:
        return 'wbacd';
      case MetricKeys.GEOLOCATION:
        return 'Geolocation';
      case MetricKeys.LOGINS_PER_SIGNUP:
        return 'Logins Per Signup';
      case MetricKeys.LOGS:
        return 'Logs';
      case MetricKeys.IDENTITY_PROVIDERS:
        return 'Identity Providers';
    }
  };


  renderLoading() {
    return <div className="loader-wrapper"><div className={"spinner spinner-center spinner-lg text-center is-auth0"}><div className={"circle"}></div></div></div>;
  }

  renderCharts() {
    return (
      <div>
        <MetricChart
          dataSet={this.props.dataSet}
          metricKey={this.props.metricKey} />

        <MetricTable
          dataSet={this.props.dataSet}
          metricKey={this.props.metricKey} />
      </div>
    )
  }

  renderNoData () {
    return (<div className="no-data">We found no data for the selected time period</div>)
  }
  
  renderContent() {
    return (
      <div>{!this.props.dataSet.dates && !this.props.dataSet.avg ? this.renderNoData() : this.renderCharts() }</div>
    )
  }

  render() {
    return (
      <section>
        <header>
          <div className={styles.titleWrap}>
            <h3 className={styles.title}>{this.props.title}</h3>
            <MetricDateRangePicker
              startDate={this.props.startDate}
              endDate={this.props.endDate}
              onDateRangeChange={this.props.onDateRangeChange} />
          </div>
          <h5 className={styles.explanation}>{this.metricExplanation(this.props.key)}</h5>
        </header>
        {this.props.isPending ? this.renderLoading() : this.renderContent() }
      </section>
    )
  }
};
