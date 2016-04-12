var es = require('../lib/es');
var _ = require('lodash');

module.exports = function(req, res) {

  es.search({
    "body": {
      "size":0,
      "aggs" : {
        "users":{
          "terms":{
            "field":"user_id"
          },
          "aggs" : {
            "providers":{
              "terms":{
                "field":"provider"
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
        buckets: bucket.providers.buckets.map(function(bucket) {
          
          return {
            key:bucket.key,
            count:bucket.doc_count
          }
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