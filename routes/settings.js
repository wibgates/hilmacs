"use strict";
var express       = require('express');
var router        = express.Router();
const hmService   = require('../models/hmAuthenticate/hmOauth');
const User          = require('../models/user');

router.get('/', hmService.oauth , function(req ,res) {
  res.render('superuser/client/');
});

router.get('/company', hmService.oauth,  function(req ,res) {
  res.render('superuser/client/');
});

router.get('/advanced', hmService.oauth,  function(req ,res) {

  // --breadcam message

  // --if user is authenticated
  res.render('superuser/adavanced/');
});

router.get('/key',function(req ,res) {
  //--hilmacs rendered file
  res.render('superuser/client/');
});

router.get('/exams', hmService.oauth,  function(req ,res) {

  // --breadcam message
  req.flash('breadcam','msg');

  // --if user is authenticated
  res.render('superuser/exams/');
});

router.get('/terms', hmService.oauth,  function(req ,res) {

  // --if user is authenticated
  res.render('superuser/terms/');
});

// Bursur main dashboard
router.get('/bursur', hmService.oauth,  function(req ,res) {

  // --breadcam message
  req.flash('breadcam','Bursur');

  // --if user is authenticated
  res.render('bursur/');
});


// --dos main page
router.get('/dos', hmService.oauth,  function(req ,res) {

  // --breadcam message
  req.flash('breadcam','Director of Studies');

  // --if user is authenticated
  res.render('dos/');
});

// --instructor main page
router.get('/instructor', hmService.oauth,  function(req ,res) {

  // --breadcam message
  req.flash('breadcam','Instructor');

  // --if user is authenticated
  res.render('instructor/');
});

// --librarian main page
router.get('/librarian', hmService.oauth,  function(req ,res) {

  // --breadcam message
  req.flash('breadcam','librarian');

  // --if user is authenticated
  res.render('librarian/');
});

// --nurse main page
router.get('/nurse', hmService.oauth,  function(req ,res) {

  // --breadcam message
  req.flash('breadcam','Nurse');

  // --if user is authenticated
  res.render('nurse/');
});

// --director main page
router.get('/director', hmService.oauth,  function(req ,res) {

  // --breadcam message
  req.flash('breadcam','Director');

  // --if user is authenticated
  res.render('director/');
});

// --principal main page
router.get('/principal', hmService.oauth,  function(req ,res) {

  // --breadcam message
  req.flash('breadcam','principal');

  // --if user is authenticated
  res.render('principal/');
});

// --superuser main page
router.get('/superuser', hmService.oauth,  function(req ,res) {

  // --breadcam message
  req.flash('breadcam','superuser');

  // --if user is authenticated
  res.render('superuser/');
});

// --hrm main page
router.get('/hrm', hmService.oauth,  function(req ,res) {

  // --breadcam message
  req.flash('breadcam','human resource');

  // --if user is authenticated
  res.render('hrm/');
});



// --ethics main page
router.get('/ethics', hmService.oauth,  function(req ,res) {

  // --breadcam message
  req.flash('breadcam','ethics');

  // --if user is authenticated
  res.render('ethics/');
});

// grading settings
router.get('/grading', hmService.oauth,  function(req ,res) {
  res.render('superuser/grading/');
});

// adjust grading settings
router.get('/grading/adjust', hmService.oauth,  function(req ,res) {
  res.render('superuser/grading/adjust');
});

// advanced grading settings
router.get('/grading/advanced', hmService.oauth,  function(req ,res) {
  res.render('superuser/grading/adv');
});

// structures {school classes and subjects plus dorms }
router.get('/structures', hmService.oauth,  function(req ,res) {
  // --if user is authenticated
  res.render('superuser/structures');
});


// structures {classes }
router.get('/classes', hmService.oauth,  function(req ,res) {

  // --breadcam message
  req.flash('breadcam','classes');

  // --if user is authenticated
  res.render('superuser/structures/classes/');
});


// structures {subjects }
router.get('/subjects', hmService.oauth,  function(req ,res) {

  // --breadcam message
  req.flash('breadcam','subjects');

  // --if user is authenticated
  res.render('superuser/structures/subjects/');
});

// structures {dorms }
router.get('/dorms', hmService.oauth,  function(req ,res) {

  // --breadcam message
  req.flash('breadcam','dorms');

  // --if user is authenticated
  res.render('superuser/structures/dorms/');
});

router.get('/messenger', hmService.oauth,  function(req ,res) {

  // --breadcam message
  req.flash('breadcam','Messenger');

  // --if user is authenticated
  res.render('messenger/hmSettings');
});

// modify / update company details
router.post('/company/data',function(req ,res) {
  var x  = req.body.cdata ;
  var y  = x.split('=');
  var z = y[0] ;

  switch (y[1]) {
    case 'cname':
      var newClientData = new User({
          clientName:z
      });

       User.createClientData(newClientData, function(err ,user) {
         if(err) throw err ;
         console.log(z);
       });
      break;
     case 'caddress':
       var newClientData = new User({
           clientAddress:z
       });

        User.createClientData(newClientData, function(err ,user) {
          if(err) throw err ;
          console.log(z);
        });
       break;
     case 'cclogan':
     var newClientData = new User({
         clientSlogan:z
     });

      User.createClientData(newClientData, function(err ,user) {
        if(err) throw err ;
        console.log(z);
      });
       break;
    default:

  }
});



module.exports = router;
