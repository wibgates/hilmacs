/**
 * --ensure user is authenticated before accessing any system module
*/

const hControls   = require('../hmEngine-setup/hmControls');

/**
 * hilmacs default comment line
*/
module.exports.oauth =  (req, res, next) => {
  // Oauthenticate Client
  hControls.апроситьлицензию((err , data ) => {
    if (err) {
      res.redirect('/setup/quick-start');
    }
    if (data == null ) {
       res.redirect('/setup/quick-start');
    } else {
      if (req.isAuthenticated()) {
        return next();
      } else {
        req.flash('error_msg','You are not logged in');
        res.redirect('/users/login');
      }
    }
  });
}
