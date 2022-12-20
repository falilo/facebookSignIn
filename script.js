var database = [
	{
		username : "Falilou",
		password : "Avenirusa217"
	},

	{
		username : "Abass",
		password : "217"
	},

	{
		username : "Malik",
		password : "123456"
	},
];


var newsFeed = [
	{
		username : "Ouro",
		timeline : "so tired for all those learning"
	},

	{
		username : "Djobo",
		timeline : "JavaScript is sooooo cooool"
	}
];

function isUserValid(username, password){
	for(var i = 0; i < database.length; i++){
		if(database[i].username === username &&
		 database[i].password === password){
			return true;
		}
	}
	return false;
}


function signIn(username, password) {
	// body...
	if (isUserValid(username, password)) {
		console.log(newsFeed);
	} else {
		alert("Sorry the username or password iswrong");
	}
}

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What's your password?");
signIn(userNamePrompt, passwordPrompt); 

/*
var todos = [
	"clean room",
	"brust teeth",
	"take bath",
	"go to super market",
	"go to gym"
	];

for (var i=0; i<todos.length; i++) {
	todos[i] = todos[i] + "!";
}
*/