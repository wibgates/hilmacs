var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// User Schema (a table @ hilmacs db)
var adminSchema = mongoose.Schema({
  hcUsername:{ type:String, required: true , index:true },
  hcPassword:{ type:String, required: true },
  hcFullnames:{ type:String, required: true },
  hcGender:{ type:String,defualt:"Change"},
  hcPhone:{ type:String },
  hcPosition:{ type:String },
  hcUseRole:{ type:String, required: true },
  hcImgPath:{ type:String,default:"/img/defaults/user.jpg" },
  hcStatus:{ type:String, default: "offline" },
  hcState:{ type:String, default:1},
  hcDate:{ type:Date, default:Date.now }
});

var collectionName = 'hm_acc_admin';
var User = module.exports = mongoose.model('hm_acc_admin',adminSchema,collectionName);

// create new superuser
module.exports.createUser = function(newUser, callback) {
   bcrypt.genSalt(10, function(err, salt) {
     bcrypt.hash(newUser.hcPassword, salt, function(err, hash) {
        newUser.hcPassword = hash ;
        newUser.save(callback);
     });
   });
}

// create new adminstrator
module.exports.newAdmin = function(admin, callback) {
   bcrypt.genSalt(10, function(err, salt) {
     bcrypt.hash(admin.hcPassword, salt, function(err, hash) {
        admin.hcPassword = hash ;
        User.create(admin,callback);
     });
   });
}

//check if role exist
module.exports.checkRoleExits = function (role , callback) {
   var query = {hcUseRole:role} ;
   User.find(query , callback).limit(1);
};

//count registered users
module.exports.countAdmin = function (callback) {
  var query = {};
  User.count(query , callback);
};

module.exports.getAdmin = function (callback,limit) {
   User.find(callback).limit(limit);
};

// get only one admin string
module.exports.getAdminById = function (hc_amdin_id , callback) {
   User.findById(hc_amdin_id,callback);
};

// update admin
module.exports.updateAdminSate =  (id , update , options, callback)  => {
   var query = {_id:id};
   hmTeacher.findOneAndUpdate(query, update , callback);
};

// update hilmacs admin
module.exports.updateAdmin = function (id , updateData , options, callback) {
   var query = {_id:id}
   var update = {
     hcUsername:updateData.hcUsername,
     hcPassword:updateData.hcPassword,
     hcFullnames:updateData.hcFullnames,
     hcGender:updateData.hcGender,
     hcPhone:updateData.hcPhone,
     hcPosition:updateData.hcPosition,
     hcUseRole:updateData.hcUseRole,
     hcImgPath:updateData.hcImgPath
   }
   User.findOneAndUpdate(query, update , callback);
};


// get only one admin string by username
module.exports.getAdminByUsername = function (hcUsername , callback) {
  var query = {hcUsername:hcUsername};
  User.findOne(query, callback);
};


module.exports.getUserByUsername = function(username, callback) {
  var query = {hcUsername:username};
  User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
     if (err) throw err ;
     callback(null ,isMatch);
  });
}


module.exports.dynamicPath = function(username, callback) {
  //return 'pot' ;
}

module.exports.getUserFullnames = function (username , callback) {
  var query = {username:username};
  User.findOne(query , callback).fullnames;
};

// Delete Admin user
module.exports.removeAdmin = (id, callback) => {
	var query = {_id: id};
	User.remove(query, callback);
}
