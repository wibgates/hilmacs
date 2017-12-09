var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// hilmacs client Schema
var controlSchema = mongoose.Schema({
  hcState:{ type:String },
  hcName:{ type:String,index:true },
  hcDate:{ type:Date, default:Date.now }
});

var collectionName = 'hm_controls';
var hmControls     = mongoose.model('hm_controls' , controlSchema ,collectionName);

// Get client controls
module.exports.getControls = function (callback,limit) {
   hmControls.find(callback).limit(limit);
};

// get one hilmacs client controls by role
module.exports.getControlsByName = function (name , callback) {
   var query = {hcname:name}
   hmControls.findOne(query,callback);
};


// add hilmacs client controls
module.exports.newControl = function (newControl , callback) {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newControl.hcname, salt, function(err, hash) {
       newControl.hcname = hash ;
       newControl.save(callback);
    });
  });
};

// add hilmacs client controls
module.exports.newControlSecret = function (newControl , callback) {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newControl.hcname, salt, function(err, hash) {
       newControl.hcState = hash ;
       newControl.save(callback);
    });
  });
};


// update hilmacs client controls
module.exports.updateControl = function (name , updateData , options, callback) {
   var query = {_hcName:name}
   var update = {
     hcName: updateData.hcName,
     hcState: updateData.hcState
   }
   hmControls.findOneAndUpdate(query, update , callback);
};
