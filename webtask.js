'use latest';

var nconf = require('nconf');
var Webtask = require('webtask-tools');

module.exports = Webtask.fromExpress(function(req, res) {
  nconf
    .defaults({
      AUTHORIZE_API_KEY: req.webtaskContext.secrets.EXTENSION_SECRET,
      AUTH0_DOMAIN: req.webtaskContext.secrets.AUTH0_DOMAIN,
      AUTH0_CLIENT_ID: req.webtaskContext.secrets.AUTH0_CLIENT_ID,
      AUTH0_CLIENT_SECRET: req.webtaskContext.secrets.AUTH0_CLIENT_SECRET,
      EXTENSION_SECRET: req.webtaskContext.secrets.EXTENSION_SECRET,
      DATA_CACHE_MAX_AGE: 1000 * 30,
      NODE_ENV: 'production',
      HOSTING_ENV: 'webtask',
      CLIENT_VERSION: process.env.CLIENT_VERSION,
      USE_OAUTH2: true,
      WT_URL: req.webtaskContext.secrets.WT_URL
    });

  const StorageProviders = require('./srv/server/lib/storage/providers');
  const initServer = require('./srv/server');
  const app = initServer({
    storageProvider: new StorageProviders.WebtaskStorageProvider({
      storageContext: req.webtaskContext.storage
    })
  });

  return require('./src/server/index.js')(req, res);
});
