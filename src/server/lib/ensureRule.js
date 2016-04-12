var _ = require('lodash');
var nconf  = require( 'nconf');
var getDb = require( './storage/getdb');
var rule  = require( '../rules/add_user');

var auth0 = require('auth0');
if (nconf.get('HOSTING_ENV') === 'webtask') {
  auth0 = require('auth0@2.0.0');
}

var createRule = function (ruleVersion, db, managementClient) {
  try {
    logger.info(`Creating rule ${ruleVersion}`);

    managementClient.rules.create({
      name: 'auth0-authz',
      enabled: true,
      stage: 'login_success',
      script: rule(nconf.get('WT_URL'), nconf.get('AUTHORIZE_API_KEY'))
    })
    .then(() => db.createRule({ version: ruleVersion }))
    .catch((err) => {
      logger.error(err);
    });
  } catch (e) {
    logger.error(e);
  }
};

module.exports = function (token) {
  var db = getDb();
  var ruleVersion = '1.0';
  var managementClient = new auth0.ManagementClient({
    token,
    domain: nconf.get('AUTH0_DOMAIN')
  });

  // Create the rule if it doesn't exist yet.
  db.getRules()
    .then(function (data) {
      var rule = _.find(data, { version: ruleVersion });
      if (rule) {
        return rule;
      }

      return createRule(ruleVersion, db, managementClient);
    })
    .catch((err) => {
      logger.error(err);

      createRule(ruleVersion, db, managementClient);
    });
};
