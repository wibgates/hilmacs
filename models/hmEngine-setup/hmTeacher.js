var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

/*
   // hilmacs class Schema
*/

// User Schema (a table @ hilmacs db)
var teacherSchema = mongoose.Schema({
  hcUsername:{ type:String, required: true , index:true },
  hcPassword:{ type:String, required: true },
  hcFullnames:{ type:String, required: true },
  hcGender:{ type:String,default:'Male' },
  hcPhone:{ type:Number },
  hcAddress:{ type:String,default:'null' },
  hcUseRole:{ type:String, required: true },
  hcImgPath:{ type:String,default:"/img/defaults/user.jpg" },
  hcStatus:{ type:String, default: "offline" },
  hcState:{ type:Number, default:1 },
  hcSubjects:{type:Array,default:null},
  hcClasses:{type:Array,default:null},
  hcTType:{type:Number,default:1},
  hcDate:{ type:Date, default:Date.now }
});

const collectionName_Tea = 'hm_acc_teacher';
const hmTeacher = mongoose.model('hm_acc_teacher' , teacherSchema ,collectionName_Tea);

// Get get all teachers
module.exports.getTeacher = (callback,limit) => {
   hmTeacher.find(callback).sort({hcDate: -1}).limit(limit);
};

// get teacher by id
module.exports.getTeacherById = (id , callback) => {
   hmTeacher.findById(id,callback);
};

// get teacher by id
module.exports.getTeacherByUname = (name , callback) => {
  var query = {hcUsername:name}
  hmTeacher.findOne(query,callback).sort({hcDate: -1}).limit(5);
};


// add teacher
module.exports.addTeacher = (data , callback) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(data.hcPassword, salt, (err, hash) => {
       data.hcPassword = hash ;
       hmTeacher.create(data,callback);
    });
  });
};

// update teacher
module.exports.updateTeacherSate =  (id , update , options, callback)  => {
   var query = {_id:id};
   hmTeacher.findOneAndUpdate(query, update , callback);
};

//count registered teachers
module.exports.countTeacher = function (callback) {
  var query = {};
  hmTeacher.count(query , callback);
};

// Deactivate teacher
module.exports.removeTeacher = (id, callback) => {
	var query = {_id: id};
	hmTeacher.remove(query, callback);
}
