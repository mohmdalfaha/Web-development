/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = -10.00;
var checkBalance = true;
var isActive = false;

// your code goes here

if (checkBalance === true){
    
    if (isActive === true && balance > 0){

        console.log("Your balance is $" +balance.toFixed(2)+ "");

    }if(isActive !== true ){

    	console.log("Your account is no longer active.");

    }else if (balance === 0){

    	console.log("your account is empty.");

    }
    else
    	console.log("Your balanc is negative.\n Please contact bank.");
    
}
console.log("Thank you.\nHave a nice day!");
