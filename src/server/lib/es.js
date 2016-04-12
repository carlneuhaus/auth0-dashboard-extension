var parse = require('user-agent-parser');
var moment = require('moment-timezone');
var elasticsearch = require('elasticsearch');
var xtend = require('xtend');

var client = new elasticsearch.Client({
  host: 'https://readwrite:123456@218c249c809bc414e65d3e2227856ecc.us-east-1.aws.found.io:9243/'
  // ,log: 'trace'
});

var add = function(user) {

  var ua = parse(user.userAgent);
  user.geoip = user.geoip || {};

  var document = {
    index: 'users',
    type: user.logins_count > 1 ? 'login' : 'signup',
    body: {
      date: moment.utc(user.last_login).format(),
      local_date: moment.utc(user.last_login).tz(user.geoip.time_zone).format(),
      user_id: user.user_id,
      name: user.name,
      email: user.email,
      picture: user.picture,
      ip: user.ip,
      browser: ua.browser,
      os: ua.os,
      device: ua.device,
      geoip: {
        country_code: user.geoip.country_code,
        country_name: user.geoip.country_name,
        city: user.geoip.city,
        postal_code: user.geoip.postal_code,
        latitude: user.geoip.latitude,
        longitude: user.geoip.longitude,
        time_zone: user.geoip.time_zone
      },
      type: user.logins_count > 1 ? 'login' : 'signup',
      provider: user.provider
    }
  };

  return new Promise(function(resolve, reject) { 

    client.create(document, function (error, response) {

      if (error) {
        return reject(error);
      }

      resolve(response);

    });

  });
}

var search = function(options){

  options = xtend({
    index: 'users'
  }, options);

  return new Promise(function(resolve, reject) { 

    client.search(options).then(function (body) {
      resolve(body);
    }, function (error) {
      reject(error);
    });

  });
}

var getByUserId = function(ids) {
  return search({
    "body": {
          "filter" : {
              "terms" : { "user_id" : ids}
          }
    }
  }).then(function(response) {
    return response.hits.hits.map(function(user){
      return user._source;
    });
  });
}

var getByIPs = function(ips) {
  return search({
    "body": {
          "filter" : {
              "terms" : { "ip" : ips}
          }
    }
  }).then(function(response) {
    return response.hits.hits.map(function(user){
      return user._source;
    });
  });
}

module.exports.search = search;
module.exports.add = add;
module.exports.getByIPs = getByIPs;
module.exports.getByUserId = getByUserId;