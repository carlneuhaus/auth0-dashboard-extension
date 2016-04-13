import * as MetricKeys from './metricKeys';

export default function(key) {
  switch(key) {
    case MetricKeys.LOGINS_PER_DAY:
      return 'Logins Per Day';
    case MetricKeys.GEOLOCATION:
      return 'Geolocation';
    case MetricKeys.LOGINS_PER_SIGNUP:
      return 'Logins Per Signup';
    case MetricKeys.LOGS:
      return 'Logs';
    case MetricKeys.IDENTITY_PROVIDERS:
      return 'Identity Providers';
    case MetricKeys.CONNECTION_CHURN:
      return 'User Churn By Connection';
  }
};
