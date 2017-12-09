/**
 * hapi.js v.0.0.1
 * CopyRight Hilmacs Labs 2017
 * Auhtor : Wibgates Kenneth The Great
*/
var a = Object();

// prevent default
hmService.prevDefault('#hm-int-state');

// hilmacs default comment
$( ".hm-int-btn-1" ).click(function() {
  //request лицензия
  a.a = { лицензия : hmService.val('.hm-int-state-1') , cmd : 'aouth' } ;
  a.b = { лицензия : a.a.лицензия , cmd : 'oauth&rtn' } ;
  a.b = JSON.stringify(a.b);
  a.a = JSON.stringify(a.a);
  //pan
  $.getJSON(hmPath.gate(null,'cdn',null), { 'data' : a.a } , (data) => {
    if (parseInt(data.feedback) == 1 ) {
      hmService.html('.hm-int-state-hd',`${hmLang.locals('wait')}...`);
      hmService.hideElem('hm-int-state-bd-1');
      hmService.hideElem('hm-int-btn-1');
      $.getJSON(hmPath.gate(null,'cdn',null), { 'data' : a.b } , (data) => {
        if (data.status == 1 ) {
            a.c = [data[0] , data[1] , data[2]] ;
            hmService.hcwr('phn', data[2] , 360 );
            $.post(hmPath.gate('secret',null,'data/'), { 'data' : a.c } , (data) => {
              if (data.status == 1 ) {
                $('.hm-int-state-hd').html(`${hmLang.locals('thanks')}`);
                hmService.showElem('hm-int-state-bd-1');
                $.get(hmPath.gate('controls',null,'data/env') , (data) => {
                  next = '/setup/environment' ;
                  $('.hm-int-state-bd-1').html(`<center><a href="${next}" class="btn btn-rounded btn-stroke btn-primary">${hmLang.locals('Continue')}</a></center>`);
                });
              } else {
                $('.hm-int-btn-1').html(`<span class="text-primary">${hmLang.locals('tryAgain')}</span>`);
              }
            });
            throw new Error();
        }else {
          $('.hm-int-state-hd').html(`<span class="alert alert-warning">${hmLang.locals('pendKey')}</span>`);
          $('.hm-int-btn-1').removeClass('orange');
          $('.hm-int-btn-1').addClass('indigo text-white');
          $('.hm-int-btn-1').html(`${hmLang.locals('contactus')}`);
        }
      });
      throw new Error();
    } else {
      hmService.html('.hm-int-state-hd',`<span class="text-info">${hmLang.locals('wait')}</span>`);
      setInterval( () => {
        hmService.showElem('hm-int-state-1-bd');
        hmService.html('.hm-int-state-hd',`<span class="text-danger">${hmLang.locals('wrongkey')}</span>`);
        $('.hm-int-btn-1').removeClass('orange');
        $('.hm-int-btn-1').addClass('indigo text-white');
        $('.hm-int-btn-1').html(`${hmLang.locals('tryAgain')}`);
      }, 2000);
    }
  }).fail(() => {
     hmService.html('.hm-int-state-bd',`<b class="s-16">${hmLang.locals('connectFail')}<br> ${hmLang.locals('and')} <a href="/setup/"><u class="blueText">${hmLang.locals('tryAgain')}</u></a></b>`);
  }).always(() => {
    hmService.hideElem('hm-int-state-1-bd');
    $('.hm-int-btn-1').removeClass('indigo');
    $('.hm-int-btn-1').addClass('orange text-white');
    $('.hm-int-btn-1').html(`${hmService.hcr('loaderIcon_sm')} ${hmLang.locals('verifying')}`);
  });

});

// hilmacs default comment
$( ".hm-fn-btn-2" ).click(function() {
  // prevent default
  hmService.prevDefault('#hm-int-state-2');
  //request лицензия
  a.a = {
    полныеимена : hmService.val('.hm-int-state-2') ,
    типшколы:hmService.val('.hm-int-state-3') ,
    номертелефона:hmService.val('.hm-int-state-4'),
    cmd : 'attatch'
  } ;
  a.a = JSON.stringify(a.a);
  //pan
  $.getJSON(hmPath.gate(null,'cdn',null), { 'append' : a.a } , (data) => {
    if (parseInt(data.feedback) == 1 ) {
      hmService.html('.hm-int-state-hd',`${hmLang.locals('wait')}...`);
      hmService.hideElem('hm-int-state-bd-2');
      hmService.hideElem('hm-int-btn-2');
      $('.hm-int-state-hd').html(`${hmLang.locals('thanks')}`);
      hmService.showElem('hm-int-state-bd-2');
      $.post(hmPath.gate('controls',null,'data/') , { 'name' : 'env' , 'val':hmService.val('.hm-int-state-2') } , (data) => {
        $.get(hmPath.gate('users',null,'check/superuser') , (data) => {
          var next ;
          if (jQuery.isEmptyObject(data)) { next = '/users/register'; }else { next = '/users/login'; }
          $('.hm-int-state-bd-2').html(`<center><a href="${next}" class="btn btn-rounded btn-stroke btn-primary">${hmLang.locals('Continue')}</a></center>`);
        });
      });
    } else {
      hmService.html('.hm-int-state-hd',`<span class="redText">${hmLang.locals('invKey')}</span>`);
    }
  }).fail(() => {
     hmService.html('.hm-int-state-bd',`<b class="s-16">${hmLang.locals('connectFail')}<br> ${hmLang.locals('and')} <a href="/setup/"><u class="blueText">${hmLang.locals('tryAgain')}</u></a></b>`);
  }).always(() => {
    hmService.hideElem('hm-int-state-2-bd');
    $('.hm-int-btn-2').removeClass('indigo');
    $('.hm-int-btn-2').addClass('orange text-white');
    $('.hm-int-btn-2').html(`${hmService.hcr('loaderIcon_sm')} ${hmLang.locals('verifying')}`);
  });

});
