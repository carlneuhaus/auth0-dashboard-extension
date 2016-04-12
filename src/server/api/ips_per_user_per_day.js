var es = require('../lib/es');
var _ = require('lodash');
var moment = require('moment-timezone');

module.exports = function(req, res) {

  var to = (req.query.to && moment.utc(req.query.to)) || moment();
  var from = (req.query.from && moment.utc(req.query.from)) || to.clone().subtract(2, 'months');

  es.search({
    "body": {
      "size":0,
      "query": {
        "filtered": {
          "query": {
              "match_all": {}
          },
          "filter": {
              "range": {
                  "date": {
                      "gte": from.format(),
                      "lte": to.format()
                  }
              }
          }
        }
      },
      "aggs" : {
        "logins_per_day" : {
          "date_histogram" : { 
            "field" : "date",
            "interval":"day"
          }
          ,"aggs" : {
            "users":{
              "terms":{
                "field":"user_id"
              }
              ,"aggs" : {
                "ips":{
                  "terms":{
                    "field":"ip"
                  }
                }
              }
            }
          }
        }
      }
    }
  }).then(function(response){
    var values = [];
    var buckets = response.aggregations.logins_per_day.buckets.map(function(bucket){

      return {
        key:bucket.key_as_string,
        buckets: bucket.users.buckets.map(function(bucket) {
          values.push(bucket.ips.buckets.length);
          return {
            key: bucket.key,
            buckets: bucket.ips.buckets.map(function(bucket) {
              return {
                key:bucket.key,
                count:bucket.doc_count
              }
            })
          };
        })
      }
    });

    return {
      aggregations:buckets,
      avg: _.sum(values) / values.length
    };
  }).then(function(data){
    var ids = [];

    data.aggregations.forEach(function(day){
      day.buckets.forEach(function(user){
        if (user.buckets.length > data.avg) {
          ids.push(user.key);
        }
      });
    });

    data.users = _.uniq(ids);

    res.json(data);
  });

}