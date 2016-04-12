var path = require('path');
var nconf = require('nconf');
var app = require('./src/server/index.js');

nconf
  .argv()
  .env()
  .file(path.join(__dirname, './src/server/config.json'))
  .defaults({
    DATA_CACHE_MAX_AGE: 1000 * 10,
    NODE_ENV: 'development',
    HOSTING_ENV: 'default',
    PORT: 3000,
    USE_OAUTH2: false
  });



// Start the server.
var app = require('./src/server')();
var port = nconf.get('PORT');
var server = app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Listening on http://localhost:${port}.`);
  }
});
var host = server.address().address;
var port = server.address().port;

console.log('Example app listening at http://%s:%s', host, port);




