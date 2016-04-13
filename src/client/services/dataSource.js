import $ from 'jquery';

import * as MetricKeys from '../metricKeys';
import moment from 'moment';

export default class DataSource {
  getMetricEndpoint(metricKey, startDate, endDate) {
    let endpoint;

    switch (metricKey) {
      case MetricKeys.LOGINS_PER_DAY:
        endpoint = '/api/logins-per-day';
        break;

      case MetricKeys.LOGINS_PER_SIGNUP:
        endpoint = '/api/logins-over-signups-per-day';
        break;

      case MetricKeys.GEOLOCATION:
        endpoint = '/api/cities-per-user';
        break;

      case MetricKeys.IDENTITY_PROVIDERS:
        endpoint = '/api/idps-per-user';
        break;
    }

    endpoint += '?';

    if (startDate) {
      endpoint += 'from=' + startDate.format('YYYY-MM-DD');
      endpoint += '&';
    }
    if (endDate) {
      endpoint += 'to=' + endDate.format('YYYY-MM-DD');
    }

    return endpoint;
  }

  genRandomChurn(n) {
    const data = []

    for (var i = n; i; i--) {
      data.push(Math.random() * 0.25);
    }

    return data;
  }

  getDates(from, entries) {
    var dates = [];
    var current = moment(from);

    dates.push(from.format('YYYY-MM-DD'));

    while(entries-- > 0) {
      dates.push(from.add(1, 'day').format('YYYY-MM-DD'));
    }

    return dates;
  }

  generateUserChurnData(start, end) {
    var from = moment(start);
    var to = moment(end);

    let entries = to.diff(from, 'd');

    const dataSet = {
      dates: this.getDates(from, entries),
      values: {
        twitter: this.genRandomChurn(entries+1),
        facebook: this.genRandomChurn(entries+1),
        auth0: this.genRandomChurn(entries+1)
      }
    }

    return $.when(dataSet);
  }

  get(metric, startDate, endDate) {
    if (metric === MetricKeys.CONNECTION_CHURN){
      return this.generateUserChurnData(startDate, endDate);
    }

    let endpoint = this.getMetricEndpoint(metric, startDate, endDate);
    return $.get(endpoint);
  }
}
