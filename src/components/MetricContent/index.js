import React, { Component } from 'react';
import MetricDateRangePicker from '../MetricDateRangePicker';
import MetricChart from '../MetricChart';
import MetricTable from '../MetricTable';
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

  renderLoading() {
    return <div className={"spinner spinner-lg text-center is-auth0"}><div className={"circle"}></div></div>;
  }

  renderContent() {
    return (
      <div>
        <MetricChart />
        <MetricTable />
      </div>
    )
  }

  render() {
    return (
      <section>
        <header>
          <div>
            <h1 className={styles.title}>{this.props.title}</h1>
          </div>
          <div>
            <MetricDateRangePicker
              startDate={this.props.startDate}
              endDate={this.props.endDate}
              onDateRangeChange={this.props.onDateRangeChange} />
          </div>
        </header>
        {this.props.isPending ? this.renderLoading() : this.renderContent() }
      </section>
    )
  }
};
