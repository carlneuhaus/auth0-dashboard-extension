import * as MetricKeys from './metricKeys';

var info = {};
info[MetricKeys.LOGINS_PER_DAY] = {
  title: 'Daily User Login Frequency',
  explanation: 'Average number of times a user logs in for every day.',
  tableTitle: 'Most often logged-in user each day'
}

info[MetricKeys.GEOLOCATION] = {
  title: 'Geolocation'
}

info[MetricKeys.LOGINS_PER_SIGNUP] = {
  title: 'Logins per Signup',
  explanation: "Ratio of user logins over new signups, indicating the portion of activity from existing users"
}

info[MetricKeys.LOGS] = {
  title: 'Logs'
}

info[MetricKeys.IDENTITY_PROVIDERS] = {
  title: 'Identity Providers'
}

info[MetricKeys.CONNECTION_CHURN] = {
  title: 'User Churn By Connection',
  explanation: 'Ratio of  users joining over new 30-day inactive users',
  usageHint: 'Seeing a high value for a connection? Users of that connection are not sticking around; you may want to',
  usageHintActionLink: 'https://manage.auth0.com/#/connections/social',
  usageHintActionTitle: 'consider removing it'
}

export default info;
