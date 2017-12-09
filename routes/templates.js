var express       = require('express');
var router        = express.Router();
const hmService   = require('../models/hmAuthenticate/hmOauth');
const User         = require('../models/user');


// Company Data Path
router.get('/navTop', hmService.oauth,  function(req ,res) {

  // --breadcam message
  req.flash('breadcam','msg');

  // --if user is authenticated
  res.render('templates/navigations/navTop');
});

module.exports = router;
