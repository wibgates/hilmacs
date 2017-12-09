var mongoose = require('mongoose');

/*
   // hilmacs class Schema
*/

// hilmacs classSchema
var classesSchema = mongoose.Schema({
  hcName:{ type:String, required: true },
  hcStreams:{ type:String, default:'none' },
  hcDate:{ type:Date, default:Date.now }
});

var collectionName_Class = 'hm_structures_classes';
var hmClasses = mongoose.model('hm_structures_classes' , classesSchema ,collectionName_Class);

// Get get all classes offered
module.exports.getClasses = (callback,limit) => {
   hmClasses.find(callback).sort({hcDate: -1}).limit(limit);
};

// get one class by id
module.exports.getClassById = (id , callback) => {
   hmClasses.findById(id,callback);
};


// add class offered
module.exports.addClass = (newClass , callback) => {
   hmClasses.create(newClass,callback);
};

// update class
module.exports.updateClass =  (id , updateData , options, callback)  => {
   var query = {_id:id}
   var update = {
     hcName: updateData.hcClassName,
     hcStreams:updateData.hcStreams
   }
   hmClasses.findOneAndUpdate(query, update , callback);
};

//count registered classes
module.exports.countClasses = function (callback) {
  var query = {};
  hmClasses.count(query , callback);
};

// Delete class
module.exports.removeClassName = (id, callback) => {
	var query = {_id: id};
	hmClasses.remove(query, callback);
}

/*
   // hilmacs subjects Schema
*/

// hilmacs subjectsSchema
var subjectsSchema = mongoose.Schema({
  hcName:{ type:String, required: true },
  hcUnit:{ type:String, default:'none' },
  hcDate:{ type:Date, default:Date.now }
});

var collectionName_Subject = 'hm_structures_subjects';
var hmSubjects = mongoose.model('hm_structures_subjects' , subjectsSchema ,collectionName_Subject);

// Get get all subjects offered
module.exports.getSubjects =  (callback,limit)  => {
   hmSubjects.find(callback).sort({hcDate: -1}).limit(limit);
};

// get one subject by id
module.exports.getSubjectById =  (id , callback)  => {
   hmSubjects.findById(id,callback);
};


// add subject offered
module.exports.addSubject =  (newSubject , callback)  => {
   hmSubjects.create(newSubject,callback);
};

// update class
module.exports.updateSubject = (id , updateData , options, callback)  => {
   var query = {_id:id}
   var update = {
     hcName: updateData.hcName,
     hcUnit:updateData.hcUnits
   }
   hmSubjects.findOneAndUpdate(query, update , callback);
};

//count registered subjects
module.exports.countSubjects = function (callback) {
  var query = {};
  hmSubjects.count(query , callback);
};

// Delete class
module.exports.removeSubject = (id, callback) => {
	var query = {_id: id};
	hmSubjects.remove(query, callback);
}

/*
   // hilmacs dorms Schema
*/

// hilmacs dormsSchema
var dormsSchema = mongoose.Schema({
  hcDormName:{ type:String, required: true },
  hcCaptain:{ type:String, default:'none' },
  hcAsstCaptain:{ type:String, default:'none' },
  hcWarden:{ type:String, default:'none' },
  hcBeds:{ type:Number, default:0 },
  hcDate:{ type:Date, default:Date.now }
});

var collectionName_Dorm = 'hm_structures_dorms';
var hmDorms = mongoose.model('hm_structures_dorms' , dormsSchema ,collectionName_Dorm);

// Get get all classes offered
module.exports.getDorms = (callback,limit) => {
   hmDorms.find(callback).sort({hcDate: -1}).limit(limit);
};

// get one class by id
module.exports.getDormById = (id , callback) => {
   hmDorms.findById(id,callback);
};


// add class offered
module.exports.addDorm = (newDorm , callback) => {
   hmDorms.create(newDorm,callback);
};

// update class
module.exports.updateDorm =  (id , updateData , options, callback)  => {
   var query = {_id:id}
   var update = {
     hcDormName:updateData.hcDormName,
     hcCaptain:updateData.hcDormName,
     hcAsstCaptain:updateData.hcDormName,
     hcWarden:updateData.hcDormName,
     hcBeds:updateData.hcDormName
   }
   hmDorms.findOneAndUpdate(query, update , callback);
};

//count registered dorms
module.exports.countDorms = function (callback) {
  var query = {};
  hmDorms.count(query , callback);
};

// Delete class
module.exports.removeDorm = (id, callback) => {
	var query = {_id: id};
	hmDorms.remove(query, callback);
}
