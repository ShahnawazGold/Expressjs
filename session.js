

// npm install --save express-session


var express = require('express');
var cookieParser = require('cookie-parser');
var session = require ('express-session');

var app = express ();

app.use(cookieParser());

app.use(session({secret:"shhah"}));

    app.get('/',function (req,res) {
        if (req.session.page_views) {
            req.session.page_views++;
            res.send("you visted" +req.session.page_views+"times");
            
        } else {
            req.session.page_views=1;
            res.send("welcome here know as tht");      
        }
    });