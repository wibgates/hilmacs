var mongoose = require('mongoose');

// hilmacs client Schema
var gardingSchema = mongoose.Schema({
  hcGClass:{ type:String,index:true },
  hcGName:{ type:String,defualt:null },
  hcGValue:{ type:String,defualt:null },
  hcGDate:{type:Number,default:2017 },
  hcDate:{ type:Date, default:Date.now }
});

const gradeName = 'hm_grading';
const hmGrading = mongoose.model('hm_grading' , gardingSchema ,gradeName);

// Get client grading
module.exports.getGrading = function (callback,limit) {
   hmGrading.find(callback).limit(limit).sort({hcDate: -1});
};

// get one hilmacs client controls by role
module.exports.getGradByValue = function (data , callback) {
   var query = {hcGName:data.name,hcGClass:data.class,hcGDate:data.year}
   hmGrading.find(query,callback).collation({locale:'en',strength: 2}).sort({hcGName:1});
};

// get one by class & year
module.exports.getGradeByName = function (data , callback) {
   var query = {hcGClass:data.class,hcGDate:data.year}
   hmGrading.find(query,callback).collation({locale:'en',strength: 2}).sort({hcGName:1});
};

// get all by year
module.exports.getGradeByYear = function (data , callback) {
   var query = {hcGDate:data.year}
   hmGrading.find(query,callback).sort({hcDate: -1});
};
// get one grade by id
module.exports.getGradeById = (id , callback) => {
   hmGrading.findById(id,callback);
};

// add hilmacs client grades
module.exports.newGrading = function (data , callback) {
  hmGrading.create(data,callback);
};

// update hilmacs client grading
module.exports.updateGrade =  (id , update , callback)  => {
   var query = {_id:id};
   hmTeacher.findOneAndUpdate(query, update , callback);
};

// Delete grade
module.exports.removeGrade = (id, callback) => {
	var query = {_id: id};
	hmGrading.remove(query, callback);
}

// hilmacs client Schema
var advGardingSchema = mongoose.Schema({
  hcGAName:{type:String,index:true},
  hcGAYear:{type:Number,default:2017},
  hcGAClass:{type:String,default:null},
  hcGAPaper:{type:String,default:null},
  hcGALeast:{type:String,default:null},
  hcGADate:{ type:Date,default:Date.now }
});

const advGradeName = 'hm_grading_adv';
const hmAvdGrading = mongoose.model('hm_grading_adv' , advGardingSchema ,advGradeName);


// Get client grading
module.exports.getAdvGrading = function (callback,limit) {
   hmAvdGrading.find(callback).limit(limit).collation({locale:'en',strength: 2}).sort({hcGAName:1});
};

// get all
module.exports.getAdvGradeCheck = function (data , callback) {
   var query = {hcGAName:data.name,hcGAYear:data.year,hcGAClass:data.class,hcGAPaper:data.paper}
   hmAvdGrading.findOne(query,'hcGALeast',callback).sort({hcDate: -1});
};

// get by paper
module.exports.getAdvGradeByName = function (data , callback) {
   var query = {hcGAPaper:data.paper,hcGAYear:data.year,hcGAClass:data.class}
   hmAvdGrading.findOne(query,'hcGALeast hcGAName',callback).collation({locale:'en',strength: 2}).sort({hcGAName:1});
};

// get one grade by
module.exports.getAdvGradeByYearClass = function (data , callback) {
   var query = {hcGAYear:data.year,hcGAClass:data.class}
   hmAvdGrading.find(query,'hcGALeast hcGAName hcGAPaper _id',callback).collation({locale:'en',strength: 2}).sort({hcGAName:1});
};

// add hilmacs client advanced grades
module.exports.newAdvGrading = function (data , callback) {
   hmAvdGrading.create(data,callback);
};

// get one adv grade by id
module.exports.getAdvGradeByById = function (id , callback) {
   hmAvdGrading.findById(id,callback);
};

//update advanced grading
module.exports.updateAdvGrade =  (id , update , callback)  => {
   var query = {_id:id};
   hmTeacher.findOneAndUpdate(query, update , callback);
};

// Delete adv grade
module.exports.removeAdvGrade = (id, callback) => {
	var query = {_id: id};
	hmAvdGrading.remove(query, callback);
}
