/**
 * --hilmacs.grading.js  {jetpowered}
*/
"use strict";
/**
 * this object contains all properties,  data , events and functions
 * of the grading structure of the system
*/
hmService.grading = new Object();

/**
 * populate data across all structures
*/
hmService.grading.populate = (x) => {
	$.each(x , (key, val) => {
	 $('.hm-tr-grades-hd').before(`<td class="custom-tr text-center" style="padding-top: 12px !important;">${val.hcGName}</td>`);
	});
};

/**
 * this function also auto populates gd dropdowns with
 * default data for particular grades
*/
hmService.grading.autoAssign = (x) => {
	//get grading data
	 $.getJSON(hmPath.gate('grading',null,'year/'+x) , (data) => {
	   hmService.grading.populate(data);
	 });
}
//call function
hmService.grading.autoAssign(hmService.mtime.now('y'));

/**
 * assign default value
*/
hmService.grading.adjust = () => {
	 //on change assing default value
	 $( ".hm-inpt-g-b" ).on('keyup',() => {
	    // hilmacs default comment
	     var x = $('.hm-inpt-g-b').val().trim();
			 if (x) {
				 $('.hm-g-btn-save-a').removeClass('disabled');
			 } else {
				 $('.hm-g-btn-save-a').addClass('disabled');
			 }
	 });

	 $( ".hm-inpt-g-b-1" ).on('keyup',() => {
	    // hilmacs default comment
	     var x = $('.hm-inpt-g-b-1').val().trim();
			 if (x) {
				 $('.hm-g-btn-save-a-1').removeClass('disabled');
			 } else {
				 $('.hm-g-btn-save-a-1').addClass('disabled');
			 }
	 });

	 // hilmacs default comment
	 $( ".hm-inpt-g-c" ).on('keyup', () => {
	    // hilmacs default comment
			// hilmacs default comment
			var dx = parseInt($('.hm-inpt-g-c').val().trim());
			if ( dx !== null && dx <= 100 && dx >= 0 ) {
				$('.hm-g-btn-save-a').removeClass('disabled');
			}else {
				$('.hm-g-btn-save-a').addClass('disabled');
			}
	 });

	 // hilmacs default comment
	 $( ".hm-inpt-g-c-1" ).on('keyup', () => {
	    // hilmacs default comment
			// hilmacs default comment
			var dx = $('.hm-inpt-g-c-1').val().trim().split(',');;
      $.each(dx, function(key, val) {
      	var dy = parseInt(val);
				if ( dy !== null && dy <= 100 && dy >= 0 ) {
					$('.hm-g-btn-save-a-1').removeClass('disabled');
				}else {
					$('.hm-g-btn-save-a-1').addClass('disabled');
				}
      });
	 });
}
hmService.grading.adjust();

/**
 * create new grading
*/
hmService.grading.create = () => {
	var x,y,z,w,r,t;
   // hilmacs default comment
   $( ".hm-g-btn-save-a" ).click(() => {
      // hilmacs default comment
      x = parseInt($('.hm-inpt-g-y').val()); //year
			y = $('.hm-inpt-g-a').val(); //class
			z = $('.hm-inpt-g-b').val(); //gname
			w = parseInt($('.hm-inpt-g-c').val()); //gval
			// hilmacs split
			$.getJSON(hmPath.gate('grading',null,'check/'+hmService.css.transform('cap',z)+'/'+y+'/'+x), (data) => {
			   if (jQuery.isEmptyObject(data) || data == null ) {
					 $.post(hmPath.gate('grading',null,'data/'), { 'year' : x , 'class' : y , 'gname' : hmService.css.transform('cap',z) , 'gval' : w  } , (data) => {
              //view new content
							hmService.grading.viewGrades(x,y);
		 			});
			   } else {
					 hmService.modals.warn(0,'This Grade is already set','Sorry');
			   }
			});
   });

	 $( ".hm-g-btn-save-a-1" ).click(() => {
      // hilmacs default comment
      x = parseInt($('.hm-inpt-g-y-1').val()); //year
			y = $('.hm-inpt-g-a-1').val(); //class
			z = $('.hm-inpt-g-b-1').val().trim().split(','); //gname
			w = $('.hm-inpt-g-c-1').val().trim().split(','); //gval
			// hilmacs default comment
			//check if arrays are equal
			const m = hmService.array.merge(z,w);
			if (m === null ) {
				hmService.html('.hm-modal-g1-1-hd',hmService.css.color('red','Invalid input try {D1,D2,C3..} and {90,80,70..}'));
			} else {
				//enable bulk grade insertion
				var h = z.length ;
				$.each(m, (name, val) => {
					//check for duplicates
					$.getJSON(hmPath.gate('grading',null,'check/'+hmService.css.transform('cap',name)+'/'+y+'/'+x), (data) => {
					   if (jQuery.isEmptyObject(data) || data == null ) {
							 $.post(hmPath.gate('grading',null,'data/'), { 'year' : x , 'class' : y , 'gname' : hmService.css.transform('cap',name) , 'gval' : parseInt(val)  } , (data) => {
		              //view new content
									hmService.grading.viewGrades(x,y);
				 			});
							$('#hm-modal-g1-1').modal('hide');
						} else {
							 hmService.modals.warn(0,`This Grade ${hmService.css.transform('cap',name)} is already set , remove it from string.`,'Sorry');
					   }
					});
				});
			}
   });
}

hmService.grading.create();

/**
 * change grade default year
*/
hmService.grading.sortGradeView = (a,b,z,q,r,s) => {
	$(a).on('click',() => {
	     // hilmacs default comment
		  var x = parseInt($(b).val());
		  var y = $(z).val();
			hmService.pretty.global(q,y);
      hmService.html(r,x);
		  hmService.grading.viewGrades(x,y);
		  $(s).modal('hide');
	});
}
// sort for general
hmService.grading.sortGradeView('.hm-g-btn-save-b','.hm-inpt-g-y-a','.hm-inpt-g-y-b','classes','.hm-sv-v-g-year','#hm-modal-g2');

/**
 * display grades
*/
hmService.grading.viewGrades = (x=null,dx=null) => {
   //x: year of grades
	 var y,z,w,r,t,y,u,i,o;
	 //y: default year
	 y = hmService.mtime.now('y');
   if (x==null) { x = y ; }
	 if (dx == null ) {
		 $('#hm-modal-g2').modal('show');
	   hmService.html('#hm-g-s-v-hd','Please Select class');
	 } else {
		 $.getJSON(hmPath.gate('grading',null,'name/'+dx+'/'+x), (data) => {
		   if (jQuery.isEmptyObject(data) || data == null ) {
				 //show warning
	       hmService.modals.warn(0,'No grades set for '+x+' , '+hmService.hcr('hpg'),'Sorry');
				 $('.hm-inpt-g-a').val(dx); //class
				 $('.hm-inpt-g-y').val(x);  //gname
		   } else {
				 var count = data.length;
			   $('.hm-mv-grades').empty();
				 $.each(data, (index, val) => {
					 const r = val.hcGClass ;
	  			 const t = val.hcGName ;
	  			 const u = val.hcGValue ;
	  			 // tranlate class name
					 const i = hmService.hcr('hpg');
					 $('.hm-mv-grades').append(`
						 <tr class="text-left gtr b ${val._id}_off">
							 <td>${i}</td>
							 <td>${t}</td>
							 <td>${u}</td>
							 <td><button class="btn btn-icon btn-sm btn-rounded btn-danger ${val._id}_btn "  onclick="hmService.delBubble('grading','${val._id}')" ><i class="mdi-action-delete"></i></button></td>
						 </tr>
						 `);
				 });
		   }
		 });
	 }
}
// hilmacs run default grading
hmService.grading.viewGrades(hmService.mtime.now('y'),null);

/**
 * advanced grading
*/
hmService.grading.adv = new Object();

/**
 * set grading conditions for advanced
 * Institutes
*/
hmService.grading.adv.create = () => {
	 var x,y,z,o,p,q,r,s,t,u,v,w ;
	 const a = new Object();
   // hilmacs auto populate the hm-sv-grades dropdown
	 a.a = {
		 name:$('.hm-inpt-g-a-a').val(),
		 year:$('.hm-inpt-g-a-b').val(),
		 class:$('.hm-inpt-g-a-c').val(),
		 paper:$('.hm-inpt-g-a-d').val(),
		 least:$('.hm-inpt-g-a-e').val()
	 }
	 a.b = () => {
		 // hilmacs default comment
		 $( ".hm-inpt-g-a-c" ).change(function() {
		    // hilmacs default comment
				 x = $(this).val();
				 $.getJSON(hmPath.gate('grading',null,'name/'+x+'/'+a.a.year), (data) => {
					 $('.hm-sv-grades-class').empty();
					 if (jQuery.isEmptyObject(data) || data == null ) {
						 $('#hm-in-warn').show('slow');
						 $('.hm-g-btn-save-c').hide('slow');
						 $('.hm-sv-grades-class').append(`<option value="null">Choose Grade</option>`);
						 hmService.html('#hm-in-warn',`<span class="alert alert-danger">Missing grades</span>`);
					 }else {
						 $('#hm-in-warn').hide('slow');
						 $('.hm-g-btn-save-c').show('slow');
						 $.each(data, function(key, val) {
						 	//iterate through array or object
							$('.hm-sv-grades-class').append(`<option value="${val.hcGName}">${val.hcGName}</option>`);
						 });
					 }
				 });
		 });
	 }
	 // call this
  a.b();

	// some verification
	a.c = () => {
     // hilmacs default comment
     $( ".hm-inpt-g-a-a" ).on('keyup',function() {
         // hilmacs default comment
				 var x = $(this).val().trim();
         if (x) {
           $('.hm-g-btn-save-c').removeClass('disabled');
         } else {
           $('.hm-g-btn-save-c').addClass('disabled');
         }
     });
	}
	a.c();

	//create new condition
	a.d = () => {
     // hilmacs default comment
     $( ".hm-g-btn-save-c" ).on('click',function() {
        // hilmacs default comment
				const least = $('.hm-inpt-g-a-e').val() ;
				if (least == null || least == "null") {
					hmService.html('#hm-in-warn',`<span class="alert alert-danger">Choose least</span>`);
				} else {
					a.e = [
						$('.hm-inpt-g-a-a').val(),
						$('.hm-inpt-g-a-b').val(),
						$('.hm-inpt-g-a-c').val(),
						$('.hm-inpt-g-a-d').val(),
						least
					];
					$.getJSON(hmPath.gate('grading/advanced',null,'check/'+a.e[0]+'/'+a.e[2]+'/'+a.e[1]+'/'+a.e[3]), (data) => {
					  if (jQuery.isEmptyObject(data) || data == null ) {
							$.post(hmPath.gate('grading/advanced',null,'data/'), { 'data' : a.e } , (data) => {
			 	         if (data.status == 1 ) {
									 //notify
			 						 hmService.html('.hm-m-g-a-hd',hmService.css.color('green','Grade has been saved'));
									 //dismiss
									 $('#hm-m-g-a-1').modal('hide');
									 hmService.grading.adv.view(a.e[1],a.e[2]);
			 	         }else {
			 	         	 hmService.html('.hm-m-g-a-hd',hmService.css.color('red','Please try again later'));
			 	         }
							 }).fail(() => {
		 						hmService.html('.hm-m-g-a-hd',hmService.css.color('red','Please try again later'));
		 					});;
					  } else {
						   hmService.html('.hm-m-g-a-hd',hmService.css.color('red','This grade is already set'));
					  }
					}).fail(() => {
						hmService.html('.hm-m-g-a-hd',hmService.css.color('red','Please try again later'));
					});
				}
     });
	}
	a.d();
}
//call view
hmService.grading.adv.create();

/**
 * first request view point
*/
hmService.grading.adv.sortCGrading = () => {
	$( ".hm-g-btn-save-d" ).click(() => {
	     // hilmacs default comment
		  var x = parseInt($('.hm-inpt-g-a-f').val());
		  var y = $('.hm-inpt-g-a-g').val();
			hmService.pretty.global('classes',y);
      hmService.html('.hm-sv-v-g-year',x);
		  hmService.grading.adv.view(x,y);
		  $('#hm-m-g-a-2').modal('hide');
	});
}
hmService.grading.adv.sortCGrading();


/**
 * advanced grading view
*/
hmService.grading.adv.view = (x=null,dx=null) => {
	//x: year of grades
	var y,z,w,r,t,y,u,i,o;
	//y: default year
	y = hmService.mtime.now('y');
	if (x==null) { x = y ; }
	if (dx == null ) {
		$('#hm-m-g-a-2').modal('show');
		hmService.html('#hm-g-a-v-hd','Please Select class');
	} else {
		$.getJSON(hmPath.gate('grading',null,'advanced/name/'+dx+'/'+x), (data) => {
			if (jQuery.isEmptyObject(data) || data == null ) {
				//show warning
				hmService.modals.warn(2,'No conditional grades set for '+x+' , '+hmService.hcr('hpg'),'Sorry');
				$('.hm-inpt-g-a-b').val(dx); //class
				$('.hm-inpt-g-a-c').val(x);  //gname
			} else {
				var count = data.length;
				$('.hm-mv-cg-grades').empty();
				$.each(data, (index, val) => {
					const t = val.hcGAName ;
					// tranlate class name
					const i = hmService.hcr('hpg');
					$('.hm-mv-cg-grades').append(`
						<tr class="text-left gtr b ${val._id}_off">
							<td>${t}</td>
							<td>${i}</td>
							<td>${val.hcGAPaper}</td>
							<td>${val.hcGALeast}</td>
							<td>${x}</td>
							<td><button class="btn btn-icon btn-sm btn-rounded btn-danger ${val._id}_btn"  onclick="hmService.delBubble('grading/advanced','${val._id}')" ><i class="mdi-action-delete"></i></button></td>
						</tr>
						`);
				});
			}
		});
	}
}
// hilmacs run adavnced grading
hmService.grading.adv.view(hmService.mtime.now('y'),null);
