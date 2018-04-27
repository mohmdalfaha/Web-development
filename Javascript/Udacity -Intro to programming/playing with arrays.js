//to delete a specific index from an array

var arr=[1,2,3,4,5];

arr.splice(2,1); ///splice(index,count after index)
//console.log(arr)

// To delclare an array insie an object 

var messaging={

	name:"Mohammed",
	messages:['hi','hello','what'],

}
//console.log(messaging.messages);


// uising forEach loop

/*
 * Programming Quiz: Donuts Revisited (7-6)
 
 Directions:
Use the forEach() method to loop over the array and print out the following donut summaries using console.log.

Jelly donuts cost $1.22 each
Chocolate donuts cost $2.45 each
Cider donuts cost $1.59 each
Boston Cr




 */



var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

// your code goes here

donuts.forEach(function(donuts){
    
	console.log(donuts.type+" dounts cost $"+donuts.cost+" each");
 

});



