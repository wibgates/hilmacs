var express = require('express');
var router = express.Router();
const hControls = require('../models/hmEngine-setup/hmControls');
const hmService = require('../models/hmAuthenticate/hmOauth');

// Get Homepage
router.get('/', hmService.oauth, (req ,res) => {
  res.render('messenger/');
});


// hilmacs eye search
router.get('/search/:query', hmService.oauth, (req ,res) => {

  // --breadcam message
  req.flash('breadcam','search');

  // --if user is hmService.oauthd
  res.render('utilities/search/');
});


router.get('/search', hmService.oauth, (req ,res) => {

  // --breadcam message
  req.flash('breadcam','msg');

  // --if user is hmService.oauthd
  res.render('utilities/search/');
});

// Bursur main dashboard
router.get('/bursur', hmService.oauth, (req ,res) => {

  // --breadcam message
  req.flash('breadcam','Bursur');

  // --if user is hmService.oauthd
  res.render('bursur/');
});


// --dos main page
router.get('/dos', hmService.oauth, (req ,res) => {

  // --breadcam message
  req.flash('breadcam','Director of Studies');

  // --if user is hmService.oauthd
  res.render('dos/');
});

// --instructor main page
router.get('/instructor', hmService.oauth, (req ,res) => {

  // --breadcam message
  req.flash('breadcam','Instructor');

  // --if user is hmService.oauthd
  res.render('instructor/');
});

// --librarian main page
router.get('/librarian', hmService.oauth, (req ,res) => {

  // --breadcam message
  req.flash('breadcam','librarian');

  // --if user is hmService.oauthd
  res.render('librarian/');
});

// --nurse main page
router.get('/nurse', hmService.oauth, (req ,res) => {

  // --breadcam message
  req.flash('breadcam','Nurse');

  // --if user is hmService.oauthd
  res.render('nurse/');
});

// --director main page
router.get('/director', hmService.oauth, (req ,res) => {

  // --breadcam message
  req.flash('breadcam','Director');

  // --if user is hmService.oauthd
  res.render('director/');
});

// --principal main page
router.get('/principal', hmService.oauth, (req ,res) => {

  // --breadcam message
  req.flash('breadcam','principal');

  // --if user is hmService.oauthd
  res.render('principal/');
});

// --superuser main page
router.get('/superuser', hmService.oauth, (req ,res) => {

  // --breadcam message
  req.flash('breadcam','superuser');

  // --if user is hmService.oauthd
  res.render('superuser/');
});

// --hrm main page
router.get('/hrm', hmService.oauth, (req ,res) => {

  // --breadcam message
  req.flash('breadcam','Human resource');

  // --if user is hmService.oauthd
  res.render('hrm/');
});

// --ethics main page
router.get('/ethics', hmService.oauth, (req ,res) => {

  // --breadcam message
  req.flash('breadcam','ethics');

  // --if user is hmService.oauthd
  res.render('ethics/');
});

// --ethics main page
router.get('/messages', hmService.oauth, (req ,res) => {

  // --breadcam message
  req.flash('breadcam','Hilmacs Messenger');

  // --if user is hmService.oauthd
  res.render('messenger/');
});

module.exports = router;
