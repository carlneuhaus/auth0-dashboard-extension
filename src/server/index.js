var express = require('express');
var nconf = require('nconf');
var jwtDecode = require('jwt-decode');
var path = require('path');
var auth0   = require('auth0-oauth2-express');
var api = require('./api');
var ensureRule = require('./lib/ensureRule');
var app = express();

module.exports = function(options) {

  if (process.env.NODE_ENV !== 'production') {
    var webpackDevMiddleware = require("webpack-dev-middleware");
    var webpackHotMiddleware = require("webpack-hot-middleware");
    var webpack = require('webpack');
    var webpackConfig = require('../../webpack.config.js');

    var compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler, {
      hot: true,
      filename: webpackConfig.output.filename,
      publicPath: webpackConfig.output.publicPath,
      stats: {
        colors: true,
      },
      historyApiFallback: true,
    }));

    app.use(webpackHotMiddleware(compiler, {
      log: console.log,
      path: '/__webpack_hmr',
      heartbeat: 10 * 1000,
    }));
  }

  var onUserAuthenticated = function(req, res, accessToken, next) {
    var decodedToken = jwtDecode(accessToken);
    getDb().setToken(decodedToken.sub, { accessToken })
      .then(function() {
        // Create the rule.
        ensureRule(accessToken);

        // Continue.
        next();
      })
      .catch(next);
  };

  app.use(auth0({
      scopes: 'create:clients create:resource_servers create:rules',
      authenticatedCallback: onUserAuthenticated,
      clientName: 'Auth0 Authorization Dashboard Extension',
      apiToken: {
        secret: nconf.get('AUTHORIZE_API_KEY')
      }
    }));

  app.get('/', function (req, res) {
    res.send('<html><head><link href="https://cdn.auth0.com/styleguide/latest/index.css" rel="stylesheet" /><body class="a0-extension"><div id="app-container">Loading</div><script src=\'/assets/client.js\'></script></body></html>');
  });

  app.use('/api', api());

  return app;

}