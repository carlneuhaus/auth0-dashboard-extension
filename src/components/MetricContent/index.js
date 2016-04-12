import React, { Component } from 'react';
import DateRangePicker from '../DateRangePicker';
import MetricChart from '../MetricChart';
import MetricTable from '../MetricTable';

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
     <div className="">
        <div className="row">
          <h1 className={['col-xs-9', styles.title].join(' ')}>{this.state.title}</h1>
          <div className="col-xs-3"><DateRangePicker /></div>
        </div>

        <MetricChart />
        <MetricTable />
      </div>
    )
  }

  render() {
    return <div>{this.state.isPending ? this.renderLoading() : this.renderContent() }</div>;
  }
};
