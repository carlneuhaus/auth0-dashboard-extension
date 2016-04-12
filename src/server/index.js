var express = require('express');
var path = require('path');
var api = require('./api');
var app = express();

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

app.get('/', function (req, res) {
  res.send('<html><head><link href="https://cdn.auth0.com/styleguide/latest/index.css" rel="stylesheet" /><body class="a0-extension"><div id="app-container">Loading</div><script src=\'/assets/client.js\'></script></body></html>');
});

app.use('/api', api());

module.exports = app;