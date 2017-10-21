var express = require('express'),
mongoose = require('mongoose'),
fs = require('fs');

var mongoUri = 'mongodb://localhost/datakategori';
mongoose.connect(mongoUri);
var db = mongoose.connection;

db.on('error', function () {
  throw new Error('unable to connect to database at ' + mongoUri);
});

var app = express();

require('./models/kategori');
require('./routes')(app);

app.listen(3001);
console.log('Connect');