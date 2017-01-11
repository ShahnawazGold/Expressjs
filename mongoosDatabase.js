

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhsot/my_db');


var personSchema = mongoose.Schema({

    name: string,
    age :number,
    nationalty :string
    
});

var Person =mongoose.model("Person",personSchema);

//Also add a new get route in index.js to render this document: 

    app.get('/person',function (req,res) {
        res.render('person');
    });

//We'll now define a post route handler at '/person' which will handle this request:


    app.post('',function (req,res) {
        var personInfo =req.body; //get paser info
        if (!personInfo.name || !personInfo.age || !personInfo.nationality) {
            res.render('show_message', {message: "Sorry, you provided worng info", type: "error"});
        
        } else {
            /// create old objct sy new objct her poin(1) person
            var newPerson = new Person({
            name: personInfo.name,
                age: personInfo.age,
                nationality: personInfo.nationality
            });
            // use here knew person knew as tht
            newPerson.save(function (err,res) {
                
                if(err)
                    res.render('show_message', {message: "Database error", type: "error"});
                else
                    res.render('show_message', {message: "New person added", type: "success", person: personInfo});
            });

            
        }
    });


    ///Let's create a route to view all people records: /// now find function here  knw as tht


        var personSchema = mongoose.Schema({
        name: String,
        age: Number,
        nationality: String
    });

    var Person = mongoose.model("Person", personSchema);

    app.get('/people',function (req,res) {
        Person.find(function (err,response) {
            res.json(response);
        });
    });

    //// Updating Documents herr function knw as tht value

    var personSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
});

var Person = mongoose.model("Person", personSchema);

  app.put('/people/:id',function (req,res) {
      Person.findByIdAndUpdate(req.params.id,req.body,function (err,response) {
          if(err){
              res.json({message: "Error in updating person with id " + req.params.id});
              res.json(response);
          }

      });
      
  });

  /// Deleting Documents knew as tht use value


  var personSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
});

var Person = mongoose.model("Person", personSchema);


app.delete('/people/:id',function (req,res) {
    Person.findByIdAndRemove(req.params.id,function (err,response) {
        if (err) {
           res.json({message: "Error in deleting record id " + req.params.id}); 
        } else {
          res.json({message: "Person with id " + req.params.id + " removed."});  
        }
    });
});