import * as MetricKeys from './metricKeys';

export default function(key) {
  switch(key) {
    case MetricKeys.LOGINS_PER_DAY:
      return 'Logins Per Day';
    case MetricKeys.GEOLOCATION:
      return 'Geolocation';
    case MetricKeys.LOGINS_PER_SIGNUP:
      return 'Logins Per Signup';
    case MetricKeys.CITIES_PER_DAY:
      return 'Cities Per Day';
    case MetricKeys.IDENTITY_PROVIDERS:
      return 'Identity Providers';
  }
};
