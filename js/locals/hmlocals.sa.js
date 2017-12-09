/**
 * hilmacs afrikaan library
*/

hmLang.afrikaan = (a) => {
   hmLang.prefix = {
     empty : 'Vul asseblief al die velde in',
     noChg : 'Geen verandering is gemaak nie',
     noData : 'Maak asseblief seker dat u al die velde invul',
     server : 'Ooops sorrry: Server is af.',
     wrongkey: 'Ongeldige lisensie sleutel' ,
     pendKey : 'Lisensie hangende vir aktivering',
     verifying: 'verifieer',
     Submit: 'Indien',
     connectFail: 'Koppel asseblief aan die internet',
     connect : 'verbind' ,
     sysMode: 'Instituut Tipe',
     country: 'Land van Operasie',
     countryChg:'Verander land',
     sysLangChgHd: 'Verander sisteem taal',
     LicenseHeader : 'Vul asseblief gebruikerslisensies in' ,
     tryAgain : 'Probeer weer' ,
     thanks : 'Dankie vir u uitstekende samewerking' ,
     Continue : 'Aanhou',
     noKey : 'Ek het nie \'n lisensie sleutel nie.',
     invKey : 'Ongeregistreerde Telefoonnommer',
     regKey : 'Registreer my foonnommer.',
     wait : 'Wag asseblief' ,
     and : 'en',
     navHome:'huis',
     navCprofile : 'besigheids profiel' ,
     navAccounts : 'Bestuur rekeninge',
     navSubClass : 'Klasse en vakke',
     navIds : 'Identifikasie Kaarte',
     navGrading : 'Stel Graderingskaal',
     navInteract : 'Boodskappe en e-posse',
     navLogs : 'Monitor Logins', //0
     navBcRest :'Rugsteun en herstel',
     navOv: 'oorsig',
     navAdvSt: 'Gevorderde instellings',
     navMnTerms: 'terme',
     navMnExams: 'eksamens',
     navMnAccounts : 'rekeninge' ,
     teacher: 'onderwyser' ,
     admin: 'administrateur',
     student:'Student',
     navMnClass: 'Bestuur klasse' ,
     navMnSubject:'Bestuur Vakke',
     navMnDorms: 'Bestuur slaapsale',
     navLangHd:'Stelseltaal',
     navCGrade:'huidige gradering',
     navAdjGrade:'algemene gradering',
     //accounts management spu
     accHd:'Akaunti ya mtumiaji wa kampuni',
     //little words
     lwChg:'Verander'
   }
   return (hmLang.prefix[a])? hmLang.prefix[a] : a ;
}
