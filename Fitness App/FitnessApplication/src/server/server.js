// Set up
var express  = require('express');
var app      = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
//var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
//var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
//var cors = require('cors');

// Configuration
mongoose.connect('mongodb+srv://admin:jon%31%32%33@cluster0-ltfic.mongodb.net/proyecto?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("ready ton connect");
});

exports.proyecto = function(req,res) {
  res.render('proyecto');
};


//app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
//app.use(methodOverride());
//app.use(cors());

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

// Models
var Receta = mongoose.model('Receta', new mongoose.Schema({ 
  receta: String,
  alimentos: Array,
  explicacion: String,
  tipoReceta: String,
  calorias: String}, { collection : 'Receta' }));   // collection name;


  
// Routes
    // Get reviews
    app.get('/todasRecetas', function(req, res) {
        Receta.find({}, function(err, data) { 
          if (err)
              res.send(err)

            
            res.json(data); // return all reviews in JSON format
        });
    });

// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");