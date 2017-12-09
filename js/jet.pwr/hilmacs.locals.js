/**
 * hilmacs locals
 * hmLocals.js : v.0.0.1
 * Author     : Wibgates Kenneth The Great
 * CopyRight  : Hilmacs Labs 2017
 * License    : Open Source (MIT)
 * Disclaimer : 'provided to you as it is' and only consists hilmacs wordLibrary
*/

// global var that contains all languages
// supported by hilmacs font end interfaces
var hmLang = new Object();

// locate locale path
hmLang.path = (x) => {
   /**
    * this function returns the apporiate path
    * to the language library
   */
   return '/js/locals/hmlocals.'+x+'.js' ;
}

// you can remove this if u wnat to define your own way of calling this
// check user prefered lang from cookie
if (hmService.hcr('localize')) {
  $.getJSON(hmPath.gate('controls',null,'data/language'), (data) => {
    if (data == null ) {
      hmService.hcwr('localize' , 'en' , 360 );
    } else {
      hmService.hcwr('localize' , data.hcValue , 360 );
    }
  });
}else {
  //set default language if not yet set by user
  hmService.hcwr('localize' , 'en' , 360 );
}

// request defined language
hmLang.set = hmService.hcr('localize') ;

/**
 * default is english
 * you can extend this objects by simply
 * defining your {word prefix} = >(a) and its {meaning} => return value
 * the reason why am using prefixes its because
 * they have less prossing time and easy to call
*/

if (hmLang.set == 'en') {
   $.getScript(hmLang.path('en'));
}else if (hmLang.set == 'us') {
   $.getScript(hmLang.path('us'));
}else if (hmLang.set == 'fr') {
   $.getScript(hmLang.path('fr'));
}else if (hmLang.set == 'cn') {
   $.getScript(hmLang.path('cn'));
}else if (hmLang.set == 'esp') {
   $.getScript(hmLang.path('spanish'));
}else if (hmLang.set == 'ar') {
   $.getScript(hmLang.path('arab'));
}else if (hmLang.set == 'sa') {
   $.getScript(hmLang.path('sa'));
}else if (hmLang.set == 'zb') {
   $.getScript(hmLang.path('zb'));
}else if (hmLang.set == 'kws') {
   $.getScript(hmLang.path('kws'));
}else if (hmLang.set == 'sd') {
   $.getScript(hmLang.path('sd'));
}else {
   $.getScript(hmLang.path('en'));
}

hmLang.locals = (x) => {
  switch (hmLang.set) {
    case 'en':
       return hmLang.default(x) ;
      break;
    case 'us':
       return hmLang.en_us(x);
      break;
    case 'cn':
       return hmLang.china(x);
      break;
    case 'ar':
       return hmLang.arabic(x);
      break;
    case 'fr':
       return hmLang.french(x);
      break;
    case 'esp':
       return hmLang.spanish(x);
      break;
    case 'kws':
       return hmLang.swahili(x);
      break;
    case 'sa':
       return hmLang.afrikaan(x);
      break;
    case 'zb':
       return hmLang.shona(x);
      break;
    case 'sd':
      return hmLang.sudan(x);
      break;
    default:
       return hmLang.default(x) ;
  }
}
