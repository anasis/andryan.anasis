var mongoose = require('mongoose'),
kategori = mongoose.model('kategoris');

exports.findAll = function(req, res){
  kategori.find({},function(err, results) {
    return res.send(results);
  });
};
