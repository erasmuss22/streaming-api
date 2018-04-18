const jsforce = require('jsforce');

const username = 'YOUR_API_USERNAME';
const password = 'YOUR_PASSWORD';
const securityToken = 'YOUR_SECURITY_TOKEN';

const conn = new jsforce.Connection();
conn.login(username, password + securityToken, function(err, res) {
  if (err) { 
      return console.error(err);
  }

  console.log('Authenticated');
  
  conn.streaming.topic("NewAccounts").subscribe(function(message) {
    console.log('Event Type : ' + message.event.type);
    console.log('Event Created : ' + message.event.createdDate);
    console.log('Object Id : ' + message.sobject.Id);
    console.log('Event : ' + JSON.stringify(message));
  });
});