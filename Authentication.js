

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer(); 
var session = require('express-session');
var cookieParser = require('cookie-parser');


app.set('views_eng','pug');
app.set('views','./views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :true}));
app.use(upload.array());
app.use(cookieParser());
app.use(session({secret:"your secret key"}));

    var Users=[];

    app.get('/signup',function (req,res) {
        res.render('signup');
        
    });

    app.post('/signupS',function (req,res) {
            if (!req.body.id||!req.body.password) {
                res.stutus("404");
                res.send("invilde details");
            } else {
            
                Users.filter(function (user) {
                    if(user.id===req.body.id){
                    
                    res.render('signup',{message: "User Already Exists! Login or choose another user id"});
                    }
                    
                });
                var newUser= {id:req.body.id,password: req.body.password};
                Users.push(newUser);
                req.session.user = newUser;
                res.redirect('/index.html');
            }
    });


    //// after loging checkinh signg in qusery knw as tht


    function checkSignIn(req,res) {
        if (req.session.user) {
            next(); ////If session exists, proceed to page
        } else {
           var err = new Error ("NOT Login HERE");
           Console.log(req.session.user); 
           next(err);  //Error, trying to access unauthorized page!
        }
        
    }

    app.get('/protect_page', checkSignIn, function (req,res) {
        res.render('protect_page',{id:req.session.user.id});
    } );

    app.get('/login',function (req,res) {
        res.render(login);
    });

    app.post('/login',function (req,res) {
        console.log(Users);
        if (!req.body.id||!req.body.password) {
            res.render('login');
            
        } else {

            Users.filter(function (user) {
                if(user.id===req.body.id && user.password===req.body.password){
                    req.session.user= user;
                    res.redirect('/protect_page');
                }
            });
            res.render('login',{message:"invilde cfedentional"});
        }
        
    });


    app.get('/logout',function (req,res) {
        req.session.destroy(function () {
            console.log("user logout");
            
        });
        res.redirect('/login');
        
    });


   //// this  used to loging function
    app.use('/protect_page',function (err,req,res,next) {
       console.log(err); 
        //User should be authenticated! Redirect him to log in               
       res.redirect('/login');
    });