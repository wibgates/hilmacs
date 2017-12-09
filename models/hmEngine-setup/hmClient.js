var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// hilmacs client Schema
var clientSchema = mongoose.Schema({
  hcName:{ type:String, required: true },
  hcSlogan:{ type:String, required: true },
  hcAddress:{ type:String, required: true },
  hcRegNo:{ type:String, required: true },
  hcId:{ type:Number,default: 0  },
  hcLogo:{ type:String,default:"/img/defaults/logoBadge.jpg" },
  hcDate:{ type:Date, default:Date.now }
});

function hc_NextSequence(name) {
   var ret = db.counters.findAndModify(
          {
            query: { _id: name },
            update: { $inc: { hcId: 1 } },
            new: true
          }
   );

   return ret.seq;
}

var collectionName = 'hm_client';
var hmClient = mongoose.model('hm_client' , clientSchema ,collectionName);

// Get client
module.exports.getClient = function (callback,limit) {
   hmClient.find(callback).sort({hcDate: -1}).limit(limit);
};

// Get current client
module.exports.getCurrentClient = function (callback) {
   hmClient.find(callback).sort({hcDate: -1}).limit(1);
};


// get one hilmacs client by id
module.exports.getClientById = function (id , callback) {
   hmClient.findById(id,callback);
};


// add hilmacs client
module.exports.addClient = function (newClientData , callback) {
   hmClient.create(newClientData,callback);
};

// update hilmacs client
module.exports.updateClientGen = function (id , updateData , options, callback) {
   var query = {_id:id}
   var update = {
     hcName: updateData.hcName,
     hcSlogan: updateData.hcSlogan,
     hcAddress: updateData.hcName,
     hcRegNo: updateData.hcName,
     hcHilmacsId: updateData.hcName,
     hcLogo: updateData.hcName
   }
   hmClient.findOneAndUpdate(query, update , callback);
};

// update hilmacs client
module.exports.updateClientOne = function (id , updateData , field, callback) {
   var query = {_id:id}
   var update = {
     hcName: updateData.value
   }
   hmClient.findOneAndUpdate(query, update , callback);
};

// Delete Client
module.exports.removeClient = (id, callback) => {
	var query = {_id: id};
	hmClient.remove(query, callback);
}
