


var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

var app = express();

app.use(cookiParser());
app.use( bodyParser.json());
app.use(bodyParser.urlencoded({extended :true}));
app.use(upload.array());

// require router require here

var movies = require('/movies.js');

// use the router here know as that
app.use('./movies',movies);
app.listen(3000);