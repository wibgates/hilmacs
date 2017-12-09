"use strict"
var links = new Object();
//main 
links.main = {
  main : 'https://hilmacs.com/',
  dev  : 'https://developer.hilmacs.com/' ,
  api  : 'https://app.hilmacs.com/' ,
  cdn  : 'https://cdn.hilmacs.com/' 
}
// home link
links.home = {
	main : links.main.main
} ;
// contact us
links.contact = {
  main : links.home.main+'contact' ,
  dev  : links.main.dev+'contact' ,
  help : links.home.main+'support'
}
