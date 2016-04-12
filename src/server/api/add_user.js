var es = require('../lib/es');

module.exports = function(req, res) {

  es.add(req.body).then(function(response){
    res.sendStatus(200);
  }).catch(function(err){
    res.status(500).json({ error: err });
  });

}