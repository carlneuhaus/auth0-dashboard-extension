import $ from 'jquery';

import * as MetricKeys from '../metricKeys'

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

    return endpoint;
  }

  get(metric) {
    let endpoint = this.getMetricEndpoint(metric);
    return $.get(endpoint);
  }
}
