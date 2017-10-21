var mongoose = require('mongoose'),
loker = mongoose.model('lokers');

exports.findAll = function(req, res){
  loker.find({},function(err, results) {
    return res.send(results);
  });
};
