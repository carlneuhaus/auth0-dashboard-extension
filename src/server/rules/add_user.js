function hereDoc(f) {
  return f.toString().
    replace(/^[^\/]+\/\*!?/, '').
    replace(/\*\/[^\/]+$/, '');
}

function rule() {
  /*
  function (user, context, callback) {
    user.geoip = context.request.geoip;
    user.userAgent = context.userAgent;
    user.ip = context.ip;
    user.provider = context.connectionStrategy;

    request({
      url: '#EXTENSION_URL#/api/add-user', 
      method: 'POST',
      json: user
    }, function (error, response, body) {

    })

    callback(null, user, context); 
  }
  */
}

module.exports = function (extensionUrl, token) {
  return hereDoc(rule)
      .replace('#EXTENSION_URL#', extensionUrl)
      .replace('#TOKEN#', token);//TODO
};
