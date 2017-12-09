/**
 * hilmacs traditional chineese library
*/

hmLang.china = (a) => {
  hmLang.prefix = {
    empty : '請填寫所有字段',
    noChg : '沒有變化',
    noData : '請確保填寫所有字段',
    server : 'Ooops sorrry：服務器已關閉。',
    wrongkey: '許可證密鑰無效' ,
    intConn : '请连接到互联网',
    pendKey : '許可等待激活',
    verifying: '驗證',
    Submit  : '提交',
    connectFail: '請連接到互聯網',
    connect : '連',
    sysMode: '學院類型',
    country: '操作國家',
    countryChg: '改變國家',
    sysLangChgHd: '更改系統語言',
    LicenseHeader : '請輸入用戶許可證' ,
    tryAgain : '再試一次' ,
    thanks : '感謝您的優秀合作' ,
    Continue : '繼續',
    noKey : '我沒有許可證密鑰。',
    invKey : '未註冊的電話號碼',
    regKey : '註冊我的電話號碼.',
    wait : '請稍候' ,
    and : '和',
    navHome:'主頁',
    navCprofile : '公司簡介' ,
    navAccounts : '管理帳戶',
    navSubClass : '課程與科目',
    navIds : '身份證',
    navGrading : '設置分級標度',
    navInteract : '消息和電子郵件',
    navLogs : '監視登錄',
    navBcRest :'備份和恢復',
    navOv: '概觀',
    navAdvSt: '高級設置',
    navMnTerms: '條款',
    navMnExams: '檢查',
    navMnAccounts : '帳戶' ,
    teacher: '老師' ,
    admin: '管理員',
    student:'學生',
    navMnClass: '管理類' ,
    navMnSubject:'管理主題',
    navMnDorms: '宿舍',
    navLangHd:'系統語言',
    navCGrade:'當前 等級',
    navAdjGrade:'一般 等級',
    //little words
    lwChg:'更改'
  }
  return (hmLang.prefix[a])? hmLang.prefix[a] : a ;
}
