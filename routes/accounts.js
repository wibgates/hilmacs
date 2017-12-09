"use strict";
var express = require('express');
var router = express.Router();
const hmService   = require('../models/hmAuthenticate/hmOauth');

// Get Homepage
router.get('/', hmService.oauth,  function(req ,res) {
  res.render('accounts/');
});

// view all admin accounts
router.get('/view',function(req ,res) {
  //--hilmacs rendered file
  res.render('accounts/view');
});

// Enroll student
router.get('/student', hmService.oauth,  function(req ,res) {
  req.flash('breadcam','Students');
  res.render('accounts/profiles/students/');
});

// Enroll instructor
router.get('/instructor', hmService.oauth,  function(req ,res) {
  req.flash('breadcam','Instructors');
  res.render('accounts/profiles/instructors/');
});

// Enroll adminstrator
router.get('/adminstrator', hmService.oauth,  function(req ,res) {
  req.flash('breadcam','Adminstrators');
  res.render('accounts/profiles/admin/');
});

// Enroll adminstrator
router.get('/id.card', hmService.oauth,  function(req ,res) {
  req.flash('breadcam','Identification Cards');
  res.render('accounts/idcards/');
});


// idcards for Adminstrators
router.get('/id.card/admin', hmService.oauth,  function(req ,res) {

  // --if user is authenticated
  res.render('accounts/idcards/admin');
});

// idcards for Instructors
router.get('/id.card/instructor', hmService.oauth,  function(req ,res) {

  // --if user is authenticated
  res.render('accounts/idcards/instructors');
});

// idcards for students
router.get('/id.card/student', hmService.oauth,  function(req ,res) {
  // --if user is authenticated
  res.render('accounts/idcards/students');
});

// wibgates : make sure that users cann't go past the index
function hmAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.flash('error_msg','You are not logged in');
    res.redirect('/users/login');
  }

}

// Register Other Adminstrators Process
router.post('/adminstrator',function(req ,res) {
  var fullnames  = req.body.fullnames ;
  var username  = req.body.username ;
  var password  = req.body.password ;
  var phone     = req.body.phone ;
  var address   = req.body.address ;
  var role      = req.body.role ;

  console.log('fullnames');

});




module.exports = router;
