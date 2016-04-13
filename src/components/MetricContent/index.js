import React, { Component } from 'react';
import MetricDateRangePicker from '../MetricDateRangePicker';
import MetricChart from '../MetricChart';
import MetricTable from '../MetricTable';
import * as MetricKeys from '../../client/metricKeys';
import metricInfo from '../../client/metricInfo';
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

  renderContent() {
    return (
      <div>
        <MetricChart
          dataSet={this.props.dataSet}
          metricKey={this.props.metricKey} />
        {this.renderUsageHint()}
        <MetricTable
          title={metricInfo[this.props.metricKey].tableTitle}
          dataSet={this.props.dataSet}
          metricKey={this.props.metricKey} />
      </div>
    )
  }

  renderExplanation() {
    if (metricInfo[this.props.metricKey].explanation) {
      return <h5 className={styles.explanation}>{metricInfo[this.props.metricKey].explanation}</h5>
    }
  }

  renderUsageHint() {
    if (metricInfo[this.props.metricKey].usageHint) {
      return <p className={styles.usageHint}>
        {metricInfo[this.props.metricKey].usageHint}
        &nbsp;
        <a className={styles.usageHintAction} href={metricInfo[this.props.metricKey].usageHintActionLink}>{metricInfo[this.props.metricKey].usageHintActionTitle}</a>
      </p>
    }
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
          {this.renderExplanation()}
        </header>
        {this.props.isPending ? this.renderLoading() : this.renderContent() }
      </section>
    )
  }
};
