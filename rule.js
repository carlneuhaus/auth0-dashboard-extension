function (user, context, callback) {

  user.geoip = context.request.geoip;
  user.userAgent = context.userAgent;
  user.ip = context.ip;
  user.provider = context.connectionStrategy;

  request({
    url: 'extensionurl.com/adduser', 
    method: 'POST',
    json: user
  }, function (error, response, body) {

  })

  callback(null, user, context); 
}