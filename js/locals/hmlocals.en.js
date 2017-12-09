/**
 * hilmacs english library
*/

hmLang.default = (a) => {
  hmLang.prefix = {
    empty : 'Please fill all feilds',
    noChg : 'No change has been made',
    noData : 'Please make sure to fill in all feilds',
    server : 'Ooops sorrry : Server is down.',
    wrongkey: 'Invalid License Key' ,
    intConn : 'Please connect to the internet',
    pendKey : 'License Pending For Activation',
    verifying: 'Verifying',
    Submit  : 'Submit',
    connectFail: 'Please Connect to internet',
    connect : 'Connect' ,
    sysMode: 'Institute Type',
    country: 'Country of Operation',
    countryChg:'Change Country',
    sysLangChgHd: 'Change System Language',
    LicenseHeader : 'Please Enter User Licenses' ,
    tryAgain : 'Try again' ,
    thanks : 'Thank you for your excellent cooperation' ,
    Continue : a ,
    noKey : 'I don\'t have a license key.',
    regKey : 'Register my phone number.',
    invKey : 'Unregistered Phone number.',
    wait : 'Please wait' ,
    and : a ,
    navHome:'Home',
    navCprofile : 'Company Profile' ,
    navAccounts : 'Manage  Accounts',
    navSubClass : 'Classes & Subjects',
    navIds : 'Identification Cards',
    navGrading : 'Set Grading Scale',
    navInteract : 'Messaging & Emails',
    navLogs : 'Monitor Logins',
    navBcRest :'Backups & Restore',
    navOv: 'Overview',
    navAdvSt: 'Advanced Settings',
    navMnTerms: 'Terms',
    navMnExams: 'Examinations',
    navMnAccounts : 'Accounts' ,
    teacher: 'Teacher' ,
    admin: 'Adminstrator',
    student:'Student',
    navMnClass: 'Manage Calsses' ,
    navMnSubject:'Manage Subjects',
    navMnDorms: 'Manage Dormitries',
    navLangHd:'System Language',
    navCGrade:'Current Grading',
    navAdjGrade:'General Grading',
    //accounts management spu
    accHd:'Company User Accounts Overview',
    //little words
    lwChg:'Change'
  }
  return (hmLang.prefix[a])? hmLang.prefix[a] : a ;
}
