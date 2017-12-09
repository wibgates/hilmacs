var express       = require('express');
var router        = express.Router();
var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const multer      = require('multer');
const path        = require('path');
const hmService   = new Object();

//set hilmacs disk storage room
hmService.imgStore = multer.diskStorage({
  destination : './public/uploads',
  filename    :  (req,file,cb) => {
    cb(null, file.fieldname + '-' + Date.now()  + path.extname(file.originalname));
  }
});

// init uploads
hmService.imgUpload = multer({
  storage:hmService.imgStore
}).single('SuperUser');


var User = require('../models/user');

// Register
router.get('/register',function(req ,res) {
  res.render('register');
});

// Login
router.get('/login',function(req ,res) {
  res.render('login');
});

// Register SuperUser Process
router.post('/register', (req ,res) => {
  var username  = req.body.username ;
  var fullnames = req.body.fullnames ;
  var password  = req.body.password ;
  var password2 = req.body.password2 ;
  var userrole  = req.body.role ;

   // Validation
   req.checkBody('username','Name is required').notEmpty();
   req.checkBody('fullnames','Name is require').notEmpty();
   req.checkBody('password','Name is required').notEmpty();
   req.checkBody('password2','Name is required').notEmpty();

   var errors =  req.validationErrors();
   if (errors) {
      res.render('register',{
        errors:errors
      });
   } else {
       var newUser = new User({
           hcUsername:username,
           hcFullnames:fullnames,
           hcPassword:password,
           hcUseRole:userrole
       });
       
        User.createUser(newUser, function(err ,user) {
          if(err) throw err ;
          /**
           * servcie :: call upload function
          */
          hmService.imgUpload(req,res,(err) =>{
            if(err) throw err ;
            console.log(req.file);
          });
        });

       // throw feedback msg to user
       req.flash('success_msg','You are registered and can now login');

       // redirect new user to the hilmacs login page
       res.redirect('/users/login');
   }
});


// using passport to authenticate users@Hilmacs
// wibgates{dav} copied this->(code:57:77) from passport
// a copy of passport's license is attached
passport.use(new LocalStrategy(
  function(hcUsername, hcPassword, done) {
    User.getUserByUsername(hcUsername,function(err,user) {
      if(err) throw errr ;
      if (!user) {
        return done(null,false ,{message: 'Unknown Hilmacs User'});
      }

      User.comparePassword(hcPassword, user.hcPassword, function(err , isMatch) {
        if(err) throw errr ;
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null,false ,{message: 'Invalid Password'});
        }
      });

    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

router.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    req.flash('userFullnames', req.user.hcFullnames);
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/' + req.user.hcUseRole);
  });

router.get('/logout', function(req , res) {
  req.logout();

  req.flash('success_msg','You are logged out');

  res.redirect('/users/login');

});


module.exports = router;
