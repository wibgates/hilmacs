/**
 * hilmacs french library
*/

hmLang.french = (a) => {
  hmLang.prefix = {
    empty : 'S\'il vous plaît remplir tous les champs',
    noChg : 'Aucun changement n\'a été fait',
    noData : 'S\'il vous plaît assurez-vous de remplir tous les champs',
    server : 'Ooops sorrry: Le serveur est en panne.',
    wrongkey: 'Mauvaise clé de licence' ,
    intConn : 'Veuillez vous connecter à internet',
    pendKey : 'Licence en attente d\'activation',
    verifying: 'Vérification',
    Submit  : 'Soumettre',
    connectFail: 'Veuillez vous connecter à Internet',
    connect : 'Relier' ,
    sysMode: 'Type d\'institut',
    country: 'Pays d\'opération',
    countryChg: 'Changer de pays',
    sysLangChgHd: 'Changer la langue du système',
    LicenseHeader : 'Veuillez entrer les licences d\'utilisateur' ,
    tryAgain : 'Essayez à nouveau' ,
    thanks : 'Merci pour votre excellente coopération' ,
    Continue : 'continuer',
    noKey : 'Je n\'ai pas de clé de licence.',
    invKey : 'Numéro de téléphone non enregistré',
    regKey : 'Enregistrer mon numéro de téléphone.',
    wait : 'S\'il vous plaît, attendez' ,
    and : 'et',
    navHome:'Accueil',
    navCprofile : 'Profil de la société' ,
    navAccounts : 'Gérer les comptes',
    navSubClass : 'Classes et sujets',
    navIds : 'Cartes d\'identité',
    navGrading : 'Définir l\'échelle de notation',
    navInteract : 'Messagerie et e-mails',
    navLogs : 'Connexions utilisateur',
    navBcRest :'Sauvegardes et restauration',
    navOv: 'aperçu',
    navAdvSt: 'Réglages avancés',
    navMnTerms: 'Termes scolaires',
    navMnExams: 'Types d\'examen',
    navMnAccounts : 'Comptes' ,
    teacher: 'Professeur' ,
    admin: 'Administrateur',
    student:'Étudiant',
    navMnClass: 'Gérer les cours' ,
    navMnSubject:'Gérer les sujets',
    navMnDorms: 'Gérer les dortoirs',
    navLangHd:'Langue du système',
    navCGrade:'Actuel qualité',
    navAdjGrade:'général qualité',
    //little words
    lwChg:'Changement'
  }
  return (hmLang.prefix[a])? hmLang.prefix[a] : a ;
}
