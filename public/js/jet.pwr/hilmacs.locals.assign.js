/**
 * hilmacs locals assign
 * hmLocals.js : v.0.0.1
 * Author     : Wibgates Kenneth The Great
 * CopyRight  : Hilmacs Labs 2017
 * License    : Open Source (MIT)
 * Disclaimer : 'provided to you as it is' and only consists hilmacs wordLibrary
*/

// assign locales
jQuery(document).ready(function($) {
  hmService.html('.lc-cog-lang-hd',hmLang.locals('navLangHd'));
  hmService.html('.lc-nav-home',hmLang.locals('navHome'));
  hmService.html('.lc-nav-cprofile',hmLang.locals('navCprofile'));
  hmService.html('.lc-nav-accounts',hmLang.locals('navAccounts'));
  hmService.html('.lc-nav-sclass',hmLang.locals('navSubClass'));
  hmService.html('.lc-nav-ids',hmLang.locals('navIds'));
  hmService.html('.lc-nav-grade',hmLang.locals('navGrading'));
  hmService.html('.lc-nav-inter',hmLang.locals('navInteract'));
  hmService.html('.lc-nav-log',hmLang.locals('navLogs'));
  hmService.html('.lc-nav-brest',hmLang.locals('navBcRest'));
  hmService.html('.lc-nav-ov',hmLang.locals('navOv'));
  hmService.html('.lc-nav-exam',hmLang.locals('navMnExams'));
  hmService.html('.lc-nav-terms',hmLang.locals('navMnTerms'));
  hmService.html('.lc-nav-adst',hmLang.locals('navAdvSt'));
  hmService.html('.lc-nav-acc',hmLang.locals('navAccounts'));
  hmService.html('.lc-nav-admin',hmLang.locals('admin'));
  hmService.html('.lc-nav-tt',hmLang.locals('teacher'));
  hmService.html('.lc-nav-stud',hmLang.locals('student'));
  hmService.html('.lc-nav-classes',hmLang.locals('navMnClass'));
  hmService.html('.lc-nav-subjects',hmLang.locals('navMnSubject'));
  hmService.html('.lc-account',hmLang.locals('navMnAccounts'));
  hmService.html('.lc-nav-dorms',hmLang.locals('navMnDorms'));
  hmService.html('.lc-nav-grading',hmLang.locals('navCGrade'));
  hmService.html('.lc-nav-adjgrade',hmLang.locals('navAdjGrade'));
  hmService.html('.lc-country',hmLang.locals('country'));
  hmService.html('.lc-country-chg',hmLang.locals('countryChg'));
  hmService.html('.lc-lang-chg',hmLang.locals('sysLangChgHd'));
  hmService.html('.lc-sys-mode',hmLang.locals('sysMode'));
  hmService.html('.lc-sys-ft-key',hmLang.locals('noKey'));
  hmService.html('.lc-sys-ft-r-key',hmLang.locals('regKey'));
  //accounts management
  hmService.html('.lc-mn-acc-hd',hmLang.locals('accHd'));
  //little words
  hmService.html('.lc-chg',hmLang.locals('lwChg'));
});
