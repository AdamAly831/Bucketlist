 var express = require('express');
var path = require('path');

var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');



app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(1337, function(){
	console.log('bucket list on 1337');
});