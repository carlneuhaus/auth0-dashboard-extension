var es = require('../lib/es');
var _ = require('lodash');

module.exports = function(req,res) {

  es.search({
    "body": {
      "size":0,
      "aggs" : {
        "logins_per_day" : {
          "date_histogram" : { 
            "field" : "date",
            "interval":"day"
          }
          ,"aggs" : {
            "ips":{
              "terms":{
                "field":"ip"
              }
              ,"aggs" : {
                "users":{
                  "terms":{
                    "field":"user_id"
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
        buckets: bucket.ips.buckets.map(function(bucket) {

          values.push(bucket.users.buckets.length);

          return {
            key: bucket.key,
            buckets: bucket.users.buckets.map(function(bucket) {
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
      day.buckets.forEach(function(ip){
        if (ip.buckets.length > data.avg) {
          ids.push(ip.key);
        }
      });
    });

    data.ips = _.uniq(ids);

    res.json(data);
  });

}