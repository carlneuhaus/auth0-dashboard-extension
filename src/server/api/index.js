var Router = require('express');

var authenticate = require('../lib/middlewares/authenticate');

module.exports = function() {
  var api = Router();

  api.post('/add-user', authenticate, require('./add_user'));

  api.use('/cities-per-user', authenticate, require('./cities_per_user'));
  api.use('/idps-per-user', authenticate, require('./idps_per_user'));
  api.use('/ips-per-user-per-day', authenticate, require('./ips_per_user_per_day'));
  api.use('/logins-over-signups-per-day', authenticate, require('./logins_over_signups_per_day'));
  api.use('/logins-per-day', authenticate, require('./logins_per_day'));
  api.use('/users-per-ips-per-day', authenticate, require('./users_per_ips_per_day'));

  return api;
}
