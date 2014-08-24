// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '1522847937946940', // your App ID
		'clientSecret' 	: 'dd496dbc3342899a328b498f5cffa5ed', // your App Secret
		'callbackURL' 	: 'http://localhost:8080/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: 'your-consumer-key-here',
		'consumerSecret' 	: 'your-client-secret-here',
		'callbackURL' 		: 'http://localhost:8080/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: '985557785269-7l25hletigp7fehj8h3c6g7h7sd85o0i.apps.googleusercontent.com',
		'clientSecret' 	: 'qsMGzJKHVdfZyx7UtMLpC08y',
		'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
	}

};