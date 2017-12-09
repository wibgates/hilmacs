/**
	* --check if user is connected to the internet network
*/
const hmService.ping = new Object ;

/**
 * use request to manage this service
*/
hmService.ping.request = require('request');
 
hmService.ping.options = {
  url: 'http://app.hilmacs.com/api/ping',
  headers: {
    'User-Agent': 'hilmacs unknown user'
  }
};
 
hmService.ping.callback = (error, response, body) => {
  if (!error && response.statusCode == 200) {
    return {status:1} ;
  }else{
    return {status:0} ;
  }
}
 
 /**
 * --send feedback
*/
module.exports.ping = request(hmService.ping.options, hmService.ping.callback());