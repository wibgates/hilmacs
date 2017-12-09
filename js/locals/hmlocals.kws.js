/**
 * hilmacs english library
*/

hmLang.swahili = (a) => {
  hmLang.prefix = {
    empty : 'Tafadhali jaza mashamba yote',
    noChg : 'Hakuna mabadiliko yaliyofanywa',
    noData : 'Tafadhali hakikisha kujaza maeneo yote',
    server : 'Ooops sorry: Seva iko chini.',
    wrongkey: 'Kitufe cha Leseni batili' ,
    intConn : 'Tafadhali ingia kwenye mtandao',
    pendKey : 'Leseni Inasubiri Kwa Utekelezaji',
    verifying: 'Kuthibitisha',
    Submit  : 'Tuma',
    connectFail: 'Tafadhali Unganisha kwenye mtandao',
    connect : 'Unganisha' ,
    sysMode: 'Aina ya Taasisi',
    country: 'Nchi ya Uendeshaji',
    countryChg:'Badilisha Nchi',
    sysLangChgHd: 'Badilisha lugha ya Mfumo',
    LicenseHeader : 'Tafadhali Ingiza Leseni za Mtumiaji' ,
    tryAgain : 'Jaribu tena' ,
    thanks : 'Asante kwa ushirikiano wako bora' ,
    Continue : 'Endelea' ,
    noKey : 'Sina ufunguo wa leseni',
    invKey : 'Nambari ya simu isiyosajiliwa',
    regKey : 'Rejesha namba yangu ya simu.',
    wait : 'Tafadhali subiri' ,
    and : 'na' ,
    navHome:'Ukurasa wa nyumbani',
    navCprofile : 'Profaili ya Kampuni' ,
    navAccounts : 'Dhibiti Akaunti',
    navSubClass : 'Madarasa & Mada',
    navIds : 'Kadi za Utambulisho',
    navGrading : 'chwa cheo',
    navInteract : 'Ujumbe na Barua pepe',
    navLogs : 'Fuatilia Ingia',
    navBcRest :'Backups & Rudisha',
    navOv: 'Maelezo ya jumla',
    navAdvSt: 'Mipangilio ya juu',
    navMnTerms: 'muda',
    navMnExams: 'mitihani',
    navMnAccounts : 'Akaunti' ,
    teacher: 'mwalimu' ,
    admin: 'Msimamizi',
    student:'mwanafunzi',
    navMnClass: 'Dhibiti Darasa' ,
    navMnSubject:'Dhibiti Sura',
    navMnDorms: 'Dhibiti Mipaka',
    navLangHd:'Lugha ya Mfumo',
    navCGrade:'Sasa kufungua',
    navAdjGrade:'jumla kufungua',
    //accounts management spu
    accHd:'Akaunti ya mtumiaji wa kampuni',
    //little words
    lwChg:'Badilisha'

  }
  return (hmLang.prefix[a])? hmLang.prefix[a] : a ;
}
