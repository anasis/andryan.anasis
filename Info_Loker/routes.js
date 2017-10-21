module.exports = function(app){
    var loker = require('./controllers/loker');
    app.get('/loker', loker.findAll);
}