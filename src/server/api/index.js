import { Router } from 'express';

import * as middlewares from '../lib/middlewares';

module.export = function() {
  var api = Router();

  api.use('/cities-per-user', middlewares.authenticate, require('./cities_per_user'));
  api.use('/idps-per-user', middlewares.authenticate, require('./idps_per_user'));
  api.use('/ips-per-user-per-day', middlewares.authenticate, require('./ips_per_user_per_day'));
  api.use('/logins-over-signup-per-day', middlewares.authenticate, require('./logins_over_signup_per_day'));
  api.use('/logins-per-day', middlewares.authenticate, require('./logins_per_day'));
  api.use('/users-per-ips-per-day', middlewares.authenticate, require('./users_per_ips_per_day'));

  return api;
}