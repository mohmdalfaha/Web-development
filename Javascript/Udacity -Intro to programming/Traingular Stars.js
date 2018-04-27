/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {  
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.

function buildTriangle(height){

    var str="";
    for(var i =1;i<=height;i++){
    str+=makeLine(i); // Here the called string will be increasing in size,
                       // as long as height is greater than i.
}
return str;

}
// test your code by uncommenting the following line
console.log(buildTriangle(10));