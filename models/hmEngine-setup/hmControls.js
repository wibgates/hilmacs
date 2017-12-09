var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// hilmacs client Schema
var controlSchema = mongoose.Schema({
  hcState:{ type:String,default:null },
  hcName:{ type:String,defualt:null },
  hcValue:{type:String,default:null },
  hcDate:{ type:Date, default:Date.now }
});

var collectionName = 'hm_controls';
var hmControls = mongoose.model('hm_controls' , controlSchema ,collectionName);

// Get client controls
module.exports.getControls = function (callback,limit) {
   hmControls.find(callback).limit(limit);
};

// get one hilmacs client controls by role
module.exports.getControlsByName = function (name , callback) {
   var query = {hcName:name}
   hmControls.findOne(query,callback).sort({hcDate: -1});
};

// supreme control unit
module.exports.апроситьлицензию = function (callback) {
   var query = {hcName:'лицензионныйключ'}
   hmControls.findOne(query,callback);
};


// add hilmacs client controls
module.exports.newControl = function (control , callback) {
  hmControls.create(control,callback);
};

// add hilmacs client secret
module.exports.userSecret = function(data, callback) {
   bcrypt.genSalt(10, function(err, salt) {
     bcrypt.hash(data.hcValue, salt, function(err, hash) {
        data.hcValue = hash ;
        hmControls.create(data,callback);
     });
   });
}


// update hilmacs client controls
module.exports.updateControl = function (name , updateData , options, callback) {
   var query = {_hcName:name}
   var update = {
     hcName: updateData.hcName,
     hcState: updateData.hcState
   }
   hmControls.findOneAndUpdate(query, update , callback);
};
