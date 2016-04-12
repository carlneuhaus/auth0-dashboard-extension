import React, { Component } from 'react';
import * as MetricKeys from '../../client/metricKeys';

export default class MetricChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      metricKey: props.metricKey,
      dataSet: props.dataSet
    };
  }
  render() {
    var content;

    switch(this.props.metricKey) {
      case MetricKeys.LOGINS_PER_DAY: content = this.renderLoginsPerDay(); break;
      case MetricKeys.LOGINS_PER_SIGNUP: content = this.renderLoginsPerSignup(); break;
      case MetricKeys.GEOLOCATION: content = this.renderGeolocation(); break;
      case MetricKeys.LOGS: content = this.renderLogs(); break;
      case MetricKeys.IDENTITY_PROVIDERS: content = this.renderIdPs(); break;
    }

    return ( <div className="panel panel-default">
                <div className="panel-body">{content}</div>
              </div> );

  }

  renderLoginsPerDay(){
    return (<div>renderLoginsPerDay</div>);
  }
  renderLoginsPerSignup(){
    return (<div>renderLoginsPerSignup</div>);
  }
  renderGeolocation(){
    return (<div>renderGeolocation</div>);
  }
  renderLogs(){
    return (<div>renderLogs</div>);
  }
  renderIdPs(){
    return (<div>renderIdPs</div>);
  }
};
