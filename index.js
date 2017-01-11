


var express = require('express');

var app = express();





app.get('/hello', function (req , res) {
    
    res.send("hello world shah");

});

app.post('/hello', function (req,res) {
    res.send("hello");
});


/// another exmple here knw as that router 

var things = require('/.things.js');

//both index.js and things.js should be in same directory
app.use = ('/things',things);


app.listen(3000);



/// 2) express url building here strt here


app.get('/:id',function (req, res) {
     res.send('thsi is id spcific '+req.params.id);
});
app.get('/things/:name/:id', function(req, res){
    res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
});


// 3) Order of middleware calls 

    //First middleware before response is sent
    app.use('', function (req,res, next) {
        Console.log("start");
        next();
    });
    //Route handler
    app.get('/', function(req, res, next){
        res.send("Middle");
        next();
    });

    app.use('/', function(req, res){
        console.log('End');
    });

    // 3) ExpressJS - Form data////////////////////////////////////////////////////////////

        var express = require('express');
        var bodyParser = require('bod-parser');
        var multer = require ('multer');
        var upload = multer();
        var app= express ();


        app.use(bodyparser.json()); // for parsing application/json
        app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
        app.use(upload.array()); // for parsing multipart/form-data


        app.post('/', function (req,res) {
            consol.log(req.body);
            res.send("recvived ur requst");
        });



//// 4) ExpressJS - Database //////////////////////// //////////

   // npm install --save mongoose


    var mongoose = require ('mongoose');

    mongoose.connect =('mongodb://localhost/my_db');


    var personSchema = mongoose.Schema({
        
        name : string,
        age : number,
        nationality : string

    });

    var Person = mongoose.model ("Person",personSchema);

    app.get('/person', function (req,res) {
            res.render('person');
    });

     app.post('/person',function(req,res) {

            var  personInfo =req.body;
            if (!personInfo.name ||!personInfo.age ||!personInfo.nationality) {
                res.render('show_message',{message:"data error" ,type:"error"});
            } else {
                var newPerson = new Person ({
                name: personInfo.name,
                age: personInfo.age,
                nationality: personInfo.nationality
                });
                newPerson.save(function (err,res) {
                    if(err)
                    res.render('show_message', {message: "Database error", type: "error"});
                else
                  res.render('show_message', {message: "New person added", type: "success", person: personInfo});          
                });       
        }
     });


     /// UPDATE DATA HERE SHOW 


        app.put('/people/:id',function () {
                Person.findByIdAndUpdate(req.params.id,req.body,function (err,response) {
                if(err) res.json({message:"err upadate person id" +req.params.id});
                res.json(response);
                });
            
        });

        // delete data

        app.delete('/people/:id', function () {

            Person.findByIdAndRemove(req.params.id, function (err,response) {
              if(err) res.json({message: "Error in deleting record id " + req.params.id});
            else res.json({message: "Person with id " + req.params.id + " removed."});  
            });
            
        });

    



