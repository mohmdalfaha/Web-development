/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */


// your code goes here

var t=60;
while(t >= 0){
	if(t !== 50 && t !== 31 && t !== 16 && t !== 10 && t !== 6 && t !== 0 ){
		console.log("T-"+t+" seconds");
	}
     if(t === 50){
     	console.log("Orbiter transfers from ground to internal power");
     }

     if(t === 31){
     	console.log("Ground launch sequencer is go for auto sequence start");
     }

     if(t === 16){
     	console.log("Activate launch pad sound suppression system");
     }

     if(t === 10){

     	console.log("Activate main engine hydrogen burnoff system");
     }

     if(t === 6){

     	console.log("Main engine start");
     }
      if(t === 0){

      	console.log("Solid rocket booster ignition and liftoff!");
      }


      if(t === 0)
       	break;

		t= t-1;
       
}