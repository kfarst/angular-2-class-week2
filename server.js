// server.js

// set up ========================
var express  = require('express');
var app      = express();                               // create our app w/ express
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var path = require('path');
var nodeSassMiddleware = require('node-sass-middleware');
var proxy = require('http-proxy-middleware');

// configuration =================

app.use('/api', proxy({target: 'http://api.rottentomatoes.com', changeOrigin: true}));

// adding the sass middleware
app.use(
  nodeSassMiddleware({
    src: path.join(__dirname + '/src'),
    dest: path.join(__dirname + '/src'),
    debug: true,
  })
);

// The static middleware must come after the sass middleware
app.use(express.static( path.join( __dirname, 'src' ) ) );
app.use('/node_modules', express.static( path.join( __dirname, 'node_modules' ) ) );

app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(methodOverride());

// listen (start app with node server.js) ======================================
app.listen(8000);
console.log("App listening on port 8000");
