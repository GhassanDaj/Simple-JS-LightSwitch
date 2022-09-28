/* Task 1 - write your code here */
function onA(){

    document.getElementById('light').src="images/light/light_1.jpg";
    
    document.getElementById('message').innerHTML = "Light #1 is on";

 /* set image src to be that for light 1, and set message texts to be "light #1 is on"  */
 
  
}

/* implement function onB(), onC(), onD(), onE() that are similar to onA() */
function onB(){

    document.getElementById('light').src="images/light/light_2.jpg";

    document.getElementById('message').innerHTML = "Light #2 is on";
}

function onC(){

    document.getElementById('light').src="images/light/light_3.jpg";
    document.getElementById('message').innerHTML = "Light #3 is on";
}

function onD(){
    
    document.getElementById('light').src="images/light/light_4.jpg";
    document.getElementById('message').innerHTML = "Light #4 is on";
}

function onE(){

    document.getElementById('light').src="images/light/light_5.jpg";
    document.getElementById('message').innerHTML = "Light #5 is on";
}


function oFF(){
    
    document.getElementById('light').src="images/light/light_0.jpg";
    document.getElementById('message').innerHTML = "all lights are off";
}
