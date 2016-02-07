"use strict";
var x=800,z=400;

var secondMyo = Myo.create();

var thirdMyo = Myo.create(1);


var snare = new Audio('./sounds/snare.wav');
var highhat = new Audio('./sounds/highhat.wav');
var kick = new Audio('./sounds/kick.wav');
var crash = new Audio('./sounds/crash.wav');



secondMyo.on('fist', function(edge){
    //Edge is true if it's the start of the pose, false if it's the end of the pose
    if(edge){
        secondMyo.zeroOrientation();
    }
});



secondMyo.on('imu', function(data){
  

	if( (Math.abs(data.accelerometer.y)>1.3) && Math.abs(data.accelerometer.y)<1.9 )
		{snare.play();console.log(Math.abs(data.accelerometer.y));}
	else if(Math.abs(data.accelerometer.y)>2)
   	 {console.log(Math.abs(data.accelerometer.y));snare.play();}
	
  
});



thirdMyo.on('imu', function(data){

  

 	if(data.accelerometer.y > 1.0){
    	
        kick.play();
        
    }
});