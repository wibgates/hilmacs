var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');
const electron = require('electron');
mongoose.connect('mongodb://localhost/hilmacs');
var db = mongoose.connection;

// wibgates prefers mysql but let me go with NOSQL {hilmacsNosql}
/*
var mysql = require('mysql');
var bv = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

/*  if (err) throw err;
  //console.log("Connected!");
});*/

// hilmacs default index
var routes     = require('./routes/index');
// hilmacs default user path
var users      = require('./routes/users');
// hilmacs default settings
var settings   = require('./routes/settings');
// hilmacs default account gateway
var accounts   = require('./routes/accounts');
// hilmacs default templates
var templates  = require('./routes/templates');
// hilmacs default data gate way
var hmDgwapi   = require('./routes/data/hmDataGateway');
// hilmacs default repoter
var reportTypa = require('./routes/reports/academic-a');
// hillmacs default monitor
var logging = require('./routes/logging/sessions');;
// hilmacs setup
const setup = require('./routes/engine/setup');

// Init App
var app = express();

// View Engine
app.set('views',path.join(__dirname,'views'));
app.engine('handlebars',exphbs({defaultLayout:'layout'}));
app.set('view engine','handlebars');

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

// Set Static Folder
app.use(express.static(path.join(__dirname,'public')));

// Express Session
app.use(session({
  secret : 'secret',
  saveUninitialized:true,
  resave:true
}));

// passport Init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param,msg,value) {
    var namespace = param.split('.')
    , root = namespace.shift()
    , formParam = root;

    while (namespace.lenght) {
      formParam += '[' + namespace.shift() + ']';
    }
    return{
      param : formParam,
      msg: msg,
      value:value
    }
  }
}));

// connect flash
app.use(flash());

// Global vars
app.use(function(req,res,next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  // --breadcam
  res.locals.breadcam = req.flash('breadcam');

  // --session fullnames
  res.locals.userFullnames = req.flash('userFullnames');

  res.locals.user = req.user || null ;
  next();
});

app.use('/',routes);
app.use('/users',users);
app.use('/settings',settings);
app.use('/accounts',accounts);
// hilmacs layout templates
app.use('/templates',templates);
// hilmacs default data gate way
app.use('/hapi',hmDgwapi); //{hilmacs data gateway api}
app.use('/hapi/secure',hmDgwapi); //{hilmacs data gateway api 2 : server}
// hilmacs type a reports
app.use('/reports',reportTypa);
// hilmacs logging
app.use('/sessions',logging);
//hilmacs engine setup
app.use('/setup', setup);

// Set Port
app.set('port',(process.env.PORT || 80 ));

app.listen(app.get('port'), () => {
  console.log('Hilmacs Server started on port '+app.get('port'));
});
