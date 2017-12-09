var express = require('express');
var router = express.Router();
const hmService   = require('../../models/hmAuthenticate/hmOauth');

// Get academic name
router.get('/:query', hmService.oauth,  function(req ,res) {

  // --breadcam message
  req.flash('breadcam','msg');
  // --if user is authenticated
  res.render('panel/reports/');
});

// hilmacs pick defalut
router.get('/', hmService.oauth,  function(req ,res) {

  // --breadcam message
  req.flash('breadcam','msg');

  // --if user is authenticated
  res.render('panel/reports/');
});


module.exports = router;
