

// npm install --save cookie-parser


var cookieParser = require('cookie-parser');
app.use(cookieParser());


var express = require('express');
var app = express();

    app.get('/', function(req, res){
        res.cookie('name', 'express').send('cookie set'); //Sets name=express
        //Expires after 360000 ms from the time it is set.
    res.cookie(name, 'value', {expire: 360000 + Date.now()}); 
    });
    app.get('/clear_cookie_foo', function(req, res){
        clearCookie('foo');
        res.send('cookie foo cleared');
    });

app.listen(3000);