module.exports = function(app){
    var loker = require('./controllers/kategori');
    app.get('/kategori', loker.findAll);
}