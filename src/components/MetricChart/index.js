import React, { Component } from 'react';
import * as MetricKeys from '../../client/metricKeys';
import LoginsPerDayChart from './logins_per_day_chart';
import LoginsPerSignupChart from './logins_per_signup';
import IdPsPerUserChart from './idps_per_user';
import GeoLocationChart from './geo_location_chart';

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
      case MetricKeys.IDENTITY_PROVIDERS: content = this.renderIdPs(); break;
    }

    return ( <div className="panel panel-default">
                <div className="panel-body">{content}</div>
              </div> );

  }

  renderLoginsPerDay(){
    return (<LoginsPerDayChart dataSet={this.props.dataSet} />);
  }
  renderLoginsPerSignup(){
    return (<LoginsPerSignupChart dataSet={this.props.dataSet} />);
  }
  renderIdPs(){
    return (<IdPsPerUserChart dataSet={this.props.dataSet} />);
  }
  renderGeolocation(){
    return (<GeoLocationChart dataSet={this.props.dataSet} />);
  }
};
