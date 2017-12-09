var express       = require('express');
var router        = express.Router();
var bodyParser    = require('body-parser');

const hmService = require('../../models/hmAuthenticate/hmOauth');
var User        = require('../../models/user');
var hClient     = require('../../models/hmEngine-setup/hmClient');
var hTeacher    = require('../../models/hmEngine-setup/hmTeacher');
var hControls   = require('../../models/hmEngine-setup/hmControls');
var hExamTerms  = require('../../models/hmEngine-setup/hmExamTerms');
var hStructures = require('../../models/hmEngine-setup/hmClassSubject');
var hGrading    = require('../../models/hmEngine-setup/hmGrading');

//register feedback
hmService.cb = {
  status:null
}

router.get('/', hmService.oauth, (req ,res) => {
  // --if user is authenticated
  res.send('Direct access to this page is prohibited please use the hilmacs web interface <br/> or contact us on <a href="https://www.developer.hilmacs.com/gateways" target="_blank">www.developer.hilmacs.com/gateways</a>');
});

// Company Data Path
router.get('/company/data', hmService.oauth, (req ,res) => {
   hClient.getClient(function (err , data ) {
     if (err) {
       throw err ;
     }
     res.json(data);
   } , 50 );
});

// Current Company Data Path
router.get('/company/data/current', hmService.oauth, (req ,res) => {
   hClient.getCurrentClient(function (err , data ) {
     if (err) {
       throw err ;
     }
     res.json(data);
   });
});

// client data path to one
router.get('/company/data/:_id', hmService.oauth, (req ,res) => {
  var id = req.params._id ;
  hClient.getClientById(id, function (err , data ) {
    if (err) {
      throw err ;
    }
    res.json(data);
  });
});

// client data path to one
router.delete('/company/data/:_id', hmService.oauth, (req ,res) => {
  var id = req.params._id ;
  hClient.getClient(id, function (err , data ) {
    if (err) {
      throw err ;
    }
    res.json(data);
  });
});

// hilmacs create new client
router.post('/company/data', hmService.oauth, (req ,res) => {
  //var hc_uri_data_a1 = req.body.cname ; // data posted from hilmacs form or any middle ware
  var a = req.body.cname ;
  var b = req.body.caddress ;
  var c = req.body.cslogan ;
  var d = req.body.cregno ;
  // obj=>new hilmacs client
  var newClient = ({ hcName:a, hcSlogan:c, hcAddress:b, hcRegNo:d });
  hClient.addClient(newClient , function (err , data ) {
    if (err) {
      throw err ;
    }
    res.json(data);
  });
});

// Update Company Data Path
router.put('/company/data/:_id', hmService.oauth, (req ,res) => {
   var z = req.params._id ;
   var a = req.body.a ;
   var x = a.split('=');
   var y = {
       value:x[0]
   }
   hClient.updateClientOne(z , y , function (err , data ) {
     if (err) {
       throw err ;
     }
     res.json(data);
   });
});

// client data path
router.get('/users/data', hmService.oauth, (req ,res) => {
  //--hilmacs rendered file
  User.getAdmin(function (err , data ) {
    if (err) {
      throw err ;
    }
    res.json(data);
  });
});

router.get('/admin/data', hmService.oauth, (req ,res) => {
  //--hilmacs rendered file
  User.getAdmin(function (err , data ) {
    if (err) {
      throw err ;
    }
    res.json(data);
  });
});

// client data path to one
router.get('/users/data/:_id', hmService.oauth, (req ,res) => {
  var hc_uri_id = req.params._id ;
  //--hilmacs rendered file
  User.getAdminById(hc_uri_id, function (err , data ) {
    if (err) {
      throw err ;
    }
    res.json(data);
  });
});

// client data path to one
router.post('/users/data/', hmService.oauth, (req ,res) => {
   var userData = {
     hcUsername:req.body.a,
     hcPassword:req.body.g,
     hcFullnames:req.body.b,
     hcGender:req.body.c,
     hcPhone:req.body.d,
     hcPosition:req.body.e,
     hcUseRole:req.body.f
   }
   User.newAdmin(userData , function (err , data) {
     if(err) { throw err } ;
     res.json(data);
   });
});

// check if user role exits
router.get('/users/check/:role', hmService.oauth, (req ,res) => {
  var role = req.params.role ;
  //--hilmacs rendered file
  User.checkRoleExits(role, function (err , data ) {
    if (err) {
      throw err ;
    }
    res.json(data);
  });
});


// count registered users
router.get('/users/count', hmService.oauth, (req ,res) => {
  User.countAdmin(function (err , data ) {
    if (err) {
      throw err ;
    }
    res.json(data);
  });
});

// Update teacher state Data Path
router.get('/admin/update/', hmService.oauth, (req ,res) => {
  var a,b,d,e ;
  a = req.params.id;
  b = req.params.val;
  console.log(a);
});

// delete client data
router.delete('/users/data/:_id', hmService.oauth, (req ,res) => {
  var hc_uri_id = req.params._id ;
  //--hilmacs rendered file
  User.removeAdmin(hc_uri_id, function (err , data ) {
    if (err) {
      throw err ;
    }
    res.json(data);
  });
});


// teachers Data Path
router.get('/teachers/data', hmService.oauth, (req ,res) => {
  hTeacher.getTeacher((err , data ) => {
    if (err) {
      res.json({status:0});
    }else {
       res.json(data);
    }
  },50);
});

// client data path to one
router.get('/teachers/data/:_id', hmService.oauth, (req ,res) => {
  hTeacher.getTeacherById(req.params._id,  (err , data ) => {
    if (err) {
      res.json({status:0});
    }else {
       res.json(data);
    }
  });
});

// client data path to one
router.delete('/teachers/data/:_id', hmService.oauth, (req ,res) => {
  hTeacher.removeTeacher(req.params._id, function (err , data ) {
    if (err) {
       res.json({status:0});
    }else {
      res.json({status:1});
    }
  });
});

//check if username exits
router.get('/teachers/check/:name' , hmService.oauth, (req ,res) => {
  hTeacher.getTeacherByUname(req.params.name,  (err , data ) => {
    if (err) {
       res.json({status:0});
    }else {
      if (data == null ) {
       res.json({status:0});
      } else {
        res.json({status:1});
      }
    }
  });
});

// hilmacs create new client
router.post('/teachers/data', hmService.oauth, (req ,res) => {
  var a,b,c,d,e ;
  a = req.body.about ;
  b = req.body.classes ;
  c = req.body.subjects ;
  e = {
    hcUsername:a[1],
    hcPassword:a[4],
    hcFullnames:a[0],
    hcPhone:a[2],
    hcAddress:a[3],
    hcUseRole:a[5],
    hcSubjects:c,
    hcClasses:b,
    hcTType:a[6]
  }

   hTeacher.addTeacher( e , (err,data) => {
     if (err) {
       res.json({status:0});
     }else {
       res.json({status:1});
     }
   });
});

// Update teacher state Data Path
router.get('/teachers/update/', hmService.oauth, (req ,res) => {
  var a,b,d ;
  a = req.body.val;
  if (a == 1 ) { b = 0 ; }else { b = 1 ; }
  d = ({ hcState:b });

  User.updateAdminSate(a, d , (err,data) => {
    if (err) {
      res.json({status:0});
    }else {
      res.json({status:1});
    }
  });
});

// Client controls
router.get('/controls/data', hmService.oauth, (req ,res) => {
   hControls.getControls(function (err , data ) {
     if (err) {
       throw err ;
     }
     res.json(data);
   });
});

// client controls data path to one:check state of of given control
router.get('/controls/data/:name', hmService.oauth, (req ,res) => {
  var a = req.params.name ;
  hControls.getControlsByName(a, function (err , data ) {
    if (err) {
      throw err ;
    }
    res.json(data);
  });
});

// hilmacs create new client control
router.post('/secret/data', (req ,res) => {
  var b = req.body.data , x ;
  x = ({ hcName:'лицензионныйключ', hcState:1, hcValue:JSON.stringify({x:b[0],y:b[1],z:b[2]})}) ;
  hControls.userSecret(x, (err,data) => {
    if (err) {
      res.json({status:0});
    }else {
      res.json({status:1});
    }
  });
});

// hilmacs create new client control
router.post('/controls/data', (req ,res) => {
  //var hc_uri_data_a1 = req.body.cname ; // data posted from hilmacs form or any middle ware
  var a = req.body.name ;
  var b = req.body.val ;
  // obj=>new hilmacs client
  var newControl = ({ hcName:a, hcValue:b });
  hControls.newControl(newControl , function (err , data ) {
    if (err) {
      throw err ;
    }
    res.json(data);
  });
});

/*
   // hilmacs examtypes api
*/
// get all exams
router.get('/exams/data', hmService.oauth, (req ,res) => {
  hExamTerms.getExamType(function (err , data ) {
    if (err) {
      throw err ;
    }
    res.json(data);
  });
});

// get exam details by its id
router.get('/exams/data/:_id', hmService.oauth, (req ,res) => {
  var a = req.params._id ;
  hExamTerms.getExamTypeById(a ,function (err , data ) {
    if (err) {
      throw err ;
    }
    res.json(data);
  });
});

router.post('/exams/data', hmService.oauth, (req ,res) => {
  var x = req.body.a ;
  var y = req.body.b ;
  // obj=>new hilmacs client
  var newExamType = ({
    hcExam:x,
    hcAbbr:y
  });
  hExamTerms.addExamType(newExamType , function (err , data ) {
    if (err) {
      throw err ;
    }
    res.json(data);
  });
});

router.delete('/exams/data/:_id', hmService.oauth, (req ,res) => {
  var a = req.params._id ;
  hExamTerms.removeExamType(a ,function (err , data ) {
    if (err) {
      throw err ;
    }
    res.json(data);
  });
});

/*
   // hilmacs terms api
*/
// get all terms
router.get('/terms/data', hmService.oauth, (req ,res) => {
  hExamTerms.getTerms(function (err , data ) {
    if (err) {
      throw err ;
    }
    res.json(data);
  });
});

// get terms details by its id
router.get('/terms/data/:_id', hmService.oauth, (req ,res) => {
  var a = req.params._id ;
  hExamTerms.getTermById(a ,function (err , data ) {
    if (err) {
      throw err ;
    }
    res.json(data);
  });
});

router.post('/terms/data', hmService.oauth, (req ,res) => {
  var x = req.body.a ;
  // obj=>new hilmacs client
  var newTerm = ({
    hcTerm:x
  });
  hExamTerms.addTerm(newTerm , function (err , data ) {
    if (err) {
      throw err ;
    }
    res.json(data);
  });
});

router.put('/terms/data/', hmService.oauth, (req ,res) => {
  var x = req.body.a ; // id
  var y = req.body.b ; // data
  // obj=>new hilmacs client
  var updateTerm = ({
    hcTerm:y
  });
  hExamTerms.updateTerm(x , updateTerm , function (err , data ) {
    if (err) {
      throw err ;
    }
    res.json(data);
  });
});


router.put('/terms/data/status', hmService.oauth, (req ,res) => {
  var x = req.body.a ;   // id
  var y = req.body.b ;   // data
  // obj=>new hilmacs client
  var updateTerm = ({
    value:y
  });
  hExamTerms.updateTermStatus( x , updateTerm , function (err , data ) {
    if (err) {
      throw err ;
    }
    res.json(data);
  });
});

router.delete('/terms/data/:_id', hmService.oauth, (req ,res) => {
  var a = req.params._id ;
  hExamTerms.removeTerm(a ,function (err , data ) {
    if (err) {
      throw err ;
    }
    res.json(data);
  });
});

/*
   // hilmacs classes api
*/
// get all classes
router.get('/classes/data', hmService.oauth, (req ,res) => {
  hStructures.getClasses(function (err , data ) {
    if (err) {
      throw err ;
    }
    res.json(data);
  });
});

// class data path to one
router.post('/classes/data/', hmService.oauth, (req ,res) => {
   var classData = {
     hcName:req.body.a,
     hcStreams:req.body.b
   }
   hStructures.addClass(classData , function (err , data) {
     if (err) { res.json([]);
     }else { res.json(data); }
   });
});

// get class details by its id
router.get('/classes/data/:_id', hmService.oauth, (req ,res) => {
  var a = req.params._id ;
  hStructures.getClassById(a ,function (err , data ) {
    if (err) { res.json([]);
    }else { res.json(data); }
  });
});

// count registered classes
router.get('/classes/count', hmService.oauth, (req ,res) => {
  hStructures.countClasses(function (err , data ) {
    if (err) { res.json([]);
    }else { res.json(data); }
  });
});

router.delete('/classes/data/:_id', hmService.oauth, (req ,res) => {
  var a = req.params._id ;
  hStructures.removeClassName(a ,function (err , data ) {
    if (err) { res.json([]);
    }else { res.json(data); }
  });
});

/*
   // hilmacs subjects api
*/
// get all subjects
router.get('/subjects/data', hmService.oauth, (req ,res) => {
  hStructures.getSubjects(function (err , data ) {
    if (err) { res.json([]);
    }else { res.json(data); }
  });
});

// get subjects details by its id
router.get('/subjects/data/:_id', hmService.oauth, (req ,res) => {
  var a = req.params._id ;
  hStructures.getSubjectById(a ,function (err , data ) {
    if (err) { res.json([]);
    }else { res.json(data); }
  });
});

// subject data path to one
router.post('/subjects/data/', hmService.oauth, (req ,res) => {
   var subjectData = {
     hcName:req.body.a,
     hcUnit:req.body.b
   }
   hStructures.addSubject(subjectData , function (err , data) {
     if (err) { res.json([]);
     }else { res.json(data); }
   });
});

// count registered subjects
router.get('/subjects/count', hmService.oauth, (req ,res) => {
  hStructures.countSubjects(function (err , data ) {
    if (err) { res.json([]);
    }else { res.json(data); }
  });
});

router.delete('/subjects/data/:_id', hmService.oauth, (req ,res) => {
  var a = req.params._id ;
  hStructures.removeSubject(a ,function (err , data ) {
    if (err) {
      res.send(`{"status":404}`);
      throw err ;
    }
    res.json(data);
  });
});



/*
   // hilmacs dormitry api
*/
// get all subjects
router.get('/dorms/data', hmService.oauth, (req ,res) => {
  hStructures.getDorms(function (err , data ) {
    if (err) { res.json([]);
    }else { res.json(data); }
  });
});

// get subjects details by its id
router.get('/dorms/data/:_id', hmService.oauth, (req ,res) => {
  var a = req.params._id ;
  hStructures.getDormById(a ,function (err , data ) {
    if (err) { res.json([]);
    }else { res.json(data); }
  });
});

// subject data path to one
router.post('/dorms/data/', hmService.oauth, (req ,res) => {
   var dormData = {
     hcDormName:req.body.a,
     hcCaptain:req.body.b,
     hcAsstCaptain:req.body.c,
     hcWarden:req.body.d,
     hcBeds:req.body.e
   }
   hStructures.addDorm(dormData , function (err , data) {
     if(err) { throw err } ;
     res.json(data);
   });
});

// count registered dorms
router.get('/dorms/count', hmService.oauth, (req ,res) => {
  hStructures.countDorms(function (err , data ) {
    if (err) { res.json([]);
    }else { res.json(data); }
  });
});

router.delete('/dorms/data/:_id', hmService.oauth, (req ,res) => {
  var a = req.params._id ;
  hStructures.removeDorm(a ,function (err , data ) {
    if (err) { res.json([]);
    }else { res.json(data); }
  });
});

/**
 * hilmacs get set language
*/
router.post('/lang/data', (req ,res) => {
  //--hilmacs rendered file
  var x = {
    hcState:1,
    hcName:'language',
    hcValue:req.body.data
  }
  hControls.newControl(x,(err,data) => {
     if (err) {
        res.json({status:0});
     } else {
        res.json({status:1});
     }
  });
});

/**
 * hilmacs grading
*/
//authenticate request
router.get('/grading/data', hmService.oauth,  (req ,res) => {
  // --if user is authenticated
  hGrading.getGrading((err,data) => {
    if (err) { res.json([]);
    }else { res.json(data); }
  },100);
});

router.get('/grading/check/:name/:class/:year', hmService.oauth,  (req ,res) => {
  // --if user is authenticated
  var data = ({
    name:req.params.name,
    class:req.params.class,
    year:req.params.year
  });
  hGrading.getGradByValue(data,(err,data) => {
    if (err) { res.json([]);
    }else { res.json(data); }
  });
});
//authenticate request
router.get('/grading/data/:_id', hmService.oauth,  (req ,res) => {
  // --if user is authenticated
  var id = req.params._id ;
  hGrading.getGradeById(id,  (err , data ) => {
    if (err) { res.json([]);
    }else { res.json(data); }
  });
});

//get grade by class and year
//authenticate request
router.get('/grading/name/:class/:year', hmService.oauth,  (req ,res) => {
  // --if user is authenticated
  var x,y,z,w,r,t;
  x = req.params.year ;
  y = req.params.class ;
  z = {
    class:y,
    year:x
   }
  hGrading.getGradeByName(z,  (err , data ) => {
    if (err) { res.json([]);
    }else { res.json(data); }
  });
});

//get grade by class and year
//authenticate request
router.get('/grading/year/:year', hmService.oauth,  (req ,res) => {
  // --if user is authenticated
  var x,z;
  x = req.params.year ;
  z = {
    year:x
   }
  hGrading.getGradeByYear(z,  (err , data ) => {
    if (err) { res.json([]);
    }else { res.json(data); }
  });
});

//create grade
//authenticate request
router.post('/grading/data', hmService.oauth,  (req ,res) => {
  var x,y,z,w,r,t;
  x = req.body.year ;
  y = req.body.class ;
  z = req.body.gname ;
  w = req.body.gval ;
  r = {
    hcGClass:y,
    hcGName:z,
    hcGValue:w,
    hcGDate:x
  }
  hGrading.newGrading(r,  (err , data ) => {
    if (err) { res.json([]);
    }else { res.json(data); }
  });
});

// update grade based on id
router.put('/grading/data/:_id', hmService.oauth, (req ,res) => {
  var id = req.params._id ;
  var data = {} ;
  hGrading.updateGrade(id, data , (err,data) => {
    if (err) { res.json({status:0});
    }else { res.json({status:1}); }
  });
});

// remove grade
router.delete('/grading/data/:_id', hmService.oauth, (req ,res) => {
  var id = req.params._id ;
  hGrading.removeGrade(id,  (err , data ) => {
    if (err) { res.json({status:0});
    }else { res.json({status:1}); }
  });
});

/**
 * advanced grading
*/
//find all
router.get('/grading/advanced/data', hmService.oauth,  (req ,res) => {
  hGrading.getAdvGrading((err , data ) => {
    if (err) { res.json({});
  }else { res.json(data); }
  });
});

//find by id
router.get('/grading/advanced/data:id', hmService.oauth,  (req ,res) => {
  hGrading.getAdvGradeByById(req.params.id , (err , data ) => {
    if (err) { res.json({});
  }else { res.json(data); }
  });
});

//find by class and year
router.get('/grading/advanced/name/:class/:year', hmService.oauth,  (req ,res) => {
  var r = {
    class:req.params.class,
    year:req.params.year
  }
  hGrading.getAdvGradeByYearClass(r , (err , data ) => {
    if (err) { res.json({});
  }else { res.json(data); }
  });
});

//find by name
router.get('/grading/advanced/all/:class/:year/:paper', hmService.oauth,  (req ,res) => {
  var r = {
    class:req.params.class,
    year:req.params.year,
    paper:req.params.paper
  }
  hGrading.getAdvGradeByName(r , (err , data ) => {
    if (err) { res.json({});
  }else { res.json(data); }
  });
});

//verify
router.get('/grading/advanced/check/:name/:class/:year/:paper', hmService.oauth,  (req ,res) => {
  var r = {
    name:req.params.name ,
    class:req.params.class,
    year:req.params.year,
    paper:req.params.paper
  }
  hGrading.getAdvGradeByName(r , (err , data ) => {
    if (err) { res.json({});
  }else { res.json(data); }
  });
});

//create
router.post('/grading/advanced/data', hmService.oauth,  (req ,res) => {
  var x,r;
  x = req.body.data ;
  r = {
    hcGAName:x[0],
    hcGAYear:x[1],
    hcGAClass:x[2],
    hcGAPaper:x[3],
    hcGALeast:x[4]
  }
  hGrading.newAdvGrading(r,  (err , data ) => {
    if (err) { res.json({status:0});
    }else { res.json({status:1}); }
  });
});

// update adv grade based on id
router.put('/grading/data/:_id', hmService.oauth, (req ,res) => {
  var id = req.params._id ;
  var data = {} ;
  hGrading.updateAdvGrade(id, data , (err,data) => {
    if (err) { res.json({status:0});
    }else { res.json({status:1}); }
  });
});

// remove adv grade
router.delete('/grading/adavnced/data/:_id', hmService.oauth, (req ,res) => {
  var id = req.params._id ;
  hGrading.removeAdvGrade(id,  (err , data ) => {
    if (err) { res.json({status:0});
    }else { res.json({status:1}); }
  });
});

module.exports = router;
