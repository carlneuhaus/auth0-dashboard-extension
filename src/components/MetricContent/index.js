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
    return <div className={"spinner spinner-lg is-auth0"}><div className={"circle"}></div></div>;
  }

  renderContent() {
    return (
      <div>
        <div>
          <h1 className={styles.title}>{this.props.title}</h1>
        </div>
        <div>
          <MetricDateRangePicker startDate={this.props.startDate} endDate={this.props.endDate} onDateRangeChange={this.props.onDateRangeChange}/>
        </div>

        <MetricChart 
          dataSet={this.props.dataSet}
          metricKey={this.props.metricKey} />
          
        <MetricTable 
          dataSet={this.props.dataSet}
          metricKey={this.props.metricKey} />
      </div>
    )
  }

  render() {
    return <div>{this.props.isPending ? this.renderLoading() : this.renderContent() }</div>;
  }
};
