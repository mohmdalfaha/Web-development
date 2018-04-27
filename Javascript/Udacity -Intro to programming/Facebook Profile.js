var facebookProfile = {

	name:"Mohmd Alfaha",
	friends: 4,
	messages:['Good morning everyone!!','I have graduated this week','Thanks for your support in my degree life !!'],

	postMessage: function(message){

		facebookProfile.messages.push(message);
	},

	deleteMessage: function(index){

		facebookProfile.messages.splice(index,1);

	                                 
		},
        
	addFriend: function add() {

		facebookProfile.friends+=1;
	},

	removeFriend: function reomve(){

		 facebookProfile.friends-=1;
	},
};

/*
facebookProfile.addFriend();
facebookProfile.postMessage("I am your friend");;

console.log(facebookProfile.name+"\n"+facebookProfile.friends+"\n"+facebookProfile.messages+"\n");
facebookProfile.removeFriend();

facebookProfile.deleteMessage(0);



console.log(facebookProfile.name+"\n"+facebookProfile.friends+"\n"+facebookProfile.messages+"\n");
*/




