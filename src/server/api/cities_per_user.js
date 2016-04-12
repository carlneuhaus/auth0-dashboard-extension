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
        "users":{
          "terms":{
            "field":"user_id"
          }
          ,"aggs" : {
            "countries":{
              "terms":{
                "field":"geoip.country_name"
              }
              ,"aggs" : {
                "cities":{
                  "terms":{
                    "field":"geoip.city"
                  }
                }
              }
            }
          }
        }
      }
    }
  }).then(function(response){
    var buckets = response.aggregations.users.buckets.map(function(bucket){

      return {
        key:bucket.key,
        buckets: bucket.countries.buckets.map(function(bucket) {
          return {
            key: bucket.key,
            buckets: bucket.cities.buckets.map(function(bucket) {
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
      aggregations:buckets
    };
  }).then(function(data){
    res.json(data);
  });

}