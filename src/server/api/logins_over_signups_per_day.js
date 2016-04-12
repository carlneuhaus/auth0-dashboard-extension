var es = require('../lib/es');
var _ = require('lodash');

module.exports = function(req,res) {

  var logins = es.search({
    "type":"login",
    "body": {
      "size":0,
      "aggs" : {
        "logins_per_day" : {
          "date_histogram" : { 
            "field" : "date",
            "interval":"day"
          }
        }
      }
    }
  });

  var signups = es.search({
    "type":"signup",
    "body": {
      "size":0,
      "aggs" : {
        "signups_per_day" : {
          "date_histogram" : { 
            "field" : "date",
            "interval":"day"
          }
        }
      }
    }
  });

  Promise.all([logins, signups]).then(function(values) { 
    return {
      logins: values[0].aggregations.logins_per_day.buckets,
      signups: values[1].aggregations.signups_per_day.buckets,
    }
  }).then(function(data){
    data.logins = _.keyBy(data.logins, 'key_as_string');
    data.signups = _.keyBy(data.signups, 'key_as_string');
    var keys = _.uniq(_.concat(_.keys(data.logins),_.keys(data.signups)));
    return keys.map(function(key){
      var logins = data.logins[key].doc_count;
      var signups = data.signups[key].doc_count;
      return {
        key:key,
        logins:logins,
        signups:signups,
        ratio:signups/logins
      };
    })
  }).then(function(data){
    res.json(data);
  });

}