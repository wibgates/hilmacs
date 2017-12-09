var express = require('express');
var router = express.Router();
const hmService   = require('../../models/hmAuthenticate/hmOauth');

// Get academic name
router.get('/logins', hmService.oauth,  function(req ,res) {
  // --if user is authenticated
  res.send('page under development');
});


module.exports = router;
