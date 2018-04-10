var array = ['Krishna', 'Rakesh', 'Venkat'];
array[0] -> "Krishna"
array[1] -> "Rakesh"
array[2] -> "Venkat"
array[3] -> undefined
array.push('Neha')
array.pop()
var x = array.pop();//Thid will save the poped up value.
// Printing an array
// Approach - 1 
for(var index = 0; index < array.length ; index++){
	console.log('index is ' + index);
	var item = array[index];
	console.log('item is ' + item);
}