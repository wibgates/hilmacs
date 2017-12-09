/**
 * hilmacs english library
*/

hmLang.shona = (a) => {
  hmLang.prefix = {
    empty : 'Ndapota uzadze minda yose',
    noChg : 'Hapana shanduko yakaitwa',
    noData : 'Ndapota ita nechokwadi chekuzadza mimwe minda',
    server : 'Ooops sori: Server iri pasi.',
    wrongkey: 'Chirongwa Chesina Kuvhiringidza' ,
    intConn : 'Ndapota shandisai paIndaneti',
    pendKey : 'License Yakamirira Kuita',
    verifying: 'Kuongorora',
    Submit  : 'Tumira',
    connectFail: 'Ndapota Shandisai kuIndaneti',
    connect : 'Haka' ,
    sysMode: 'Institute rudzi',
    country: 'Nyika yekushanda',
    countryChg:'Shanduka Nyika',
    sysLangChgHd: 'Shandura Mutauro Wenyika',
    LicenseHeader : 'Ndapota Pinda Mumiririri Mvumo' ,
    tryAgain : 'Edza zvakare' ,
    thanks : 'Ndinokutendai nokuda kwekubatana kwenyu kwakanaka' ,
    Continue : 'Rambai' ,
    noKey : 'Ndino usa ine  rezinesi svombonoro.',
    regKey : 'Bhalisa nhamba yangu yefoni.',
    invKey : 'Unregistered foni ( fonera )  nhamba.',
    wait : 'Ndapota tarisai' ,
    and : 'ne' ,
    navHome:'Musha',
    navCprofile : 'kambani Profile' ,
    navAccounts : 'Shandisa Maakaiti',
    navSubClass : 'Makirasi & Zvidzidzo',
    navIds : 'Nhamba dzeKadhi',
    navGrading : 'Ita Ganda Scale',
    navInteract : 'Kutumira & Emails',
    navLogs : 'Chengeta Logins',
    navBcRest :'Backups & Restore',
    navOv: 'Overview',
    navAdvSt: 'Purogiramu yakasimudzwa',
    navMnTerms: 'Mitemo',
    navMnExams: 'Maminitsi',
    navMnAccounts : 'Accounts' ,
    teacher: 'Teacher' ,
    admin: 'Adminstrator',
    student:'Student',
    navMnClass: 'Manage Calsses' ,
    navMnSubject:'Manage Subjects',
    navMnDorms: 'Manage Dormitries',
    navLangHd:'System Language',
    navCGrade:'Current Grading',
    navAdjGrade:'Adjust Grading',
    //accounts management spu
    accHd:'Company User Accounts Overview',
    //little words
    lwChg:'Change'
  }
  return (hmLang.prefix[a])? hmLang.prefix[a] : a ;
}
