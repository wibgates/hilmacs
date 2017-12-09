var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// hilmacs examTypeSchema
var examTypeSchema = mongoose.Schema({
  hcExam:{ type:String, required: true },
  hcAbbr:{ type:String, required: true },
  hcStatus:{ type:Number, default:0 },
  hcDate:{ type:Date, default:Date.now }
});

var collectionName = 'hm_exam_types';
var hmExamType = mongoose.model('hm_exam_types' , examTypeSchema ,collectionName);

// Get get all exams offered
module.exports.getExamType = function (callback,limit) {
   hmExamType.find(callback).sort({hcDate: -1}).limit(limit);
};

// get one examtype by id
module.exports.getExamTypeById = function (id , callback) {
   hmExamType.findById(id,callback);
};


// add examtype offered
module.exports.addExamType = function (newExamType , callback) {
   hmExamType.create(newExamType,callback);
};

// update examtype
module.exports.updateExamType = function (id , updateData , options, callback) {
   var query = {_id:id}
   var update = {
     hcExam: updateData.hcExam,
     hcAbbr:updateData.hcAbbr,
     hcStatus: updateData.hcStatus,
   }
   hmExamType.findOneAndUpdate(query, update , callback);
};

// update examtype status
module.exports.updateExamTypeStatus = function (id , updateData , field, callback) {
   var query = {_id:id}
   var update = {
     hcStatus: updateData.value
   }
   hmExamType.findOneAndUpdate(query, update , callback);
};

// Delete examtype
module.exports.removeExamType = (id, callback) => {
	var query = {_id: id};
	hmExamType.remove(query, callback);
}

/*
   // hilmacs term Schema
*/

// hilmacs examTypeSchema
var TermSchema = mongoose.Schema({
  hcTerm:{ type:String, required: true },
  hcStatus:{ type:Number, default:0 },
  hcDate:{ type:Date, default:Date.now }
});

var collectionName_Term = 'hm_terms';
var hmTerms = mongoose.model('hm_terms' , TermSchema ,collectionName_Term);

// Get get all terms offered
module.exports.getTerms = function (callback,limit) {
   hmTerms.find(callback).sort({hcDate: -1}).limit(limit);
};

// get one examtype by id
module.exports.getTermById = function (id , callback) {
   hmTerms.findById(id,callback);
};


// add examtype offered
module.exports.addTerm = function (newTerm , callback) {
   hmTerms.create(newTerm,callback);
};

// update examtype
module.exports.updateTerm = function (id , updateData , options, callback) {
   var query = {_id:id}
   var update = {
     hcTerm: updateData.hcTerm
   }
   hmTerms.findOneAndUpdate(query, update , callback);
};

// update examtype status
module.exports.updateTermStatus = function (id , updateData , field, callback) {
   var query = {_id:id}
   var update = {
     hcStatus: updateData.value
   }
   hmTerms.findOneAndUpdate(query, update , callback);
};

// Delete examtype
module.exports.removeTerm = (id, callback) => {
	var query = {_id: id};
	hmTerms.remove(query, callback);
}
