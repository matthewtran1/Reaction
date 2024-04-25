//REACTION GAME
//Var
var random = Math.floor((Math.random() * 2000) + 1000); //Generate random number from 1 to 3
let reactionTime;       //How fast the user clicks the screen 
let reactTimer;
let element = document.getElementById("divStart");
let bestTime; //Store best time
let curTime; //current time

document.getElementById("divStart").onclick = function() {start()}; //Initiate "start" function once clicked
document.getElementById("resetButton").style.visibility = 'hidden'; //hide button until after clicking 
document.getElementById("bestTime").style.visibility = 'hidden';

function changeIDWait() { //Changes from 'Start' to 'Waiting'

    document.getElementById("divStart").style.pointerEvents = 'none';
    document.getElementById("divStart").style.visibility = 'hidden';        //hide div
    
    document.getElementById("start").innerHTML = ".....";                   //change div text
    document.getElementById("instructions").innerHTML = " ";                     //hide instructions
    
    document.getElementById("divStart").id = "divWaiting";                  //Switch id to waiting

    element = document.getElementById("divWaiting")

    //Hide reset button
    document.getElementById("resetButton").style.visibility = 'hidden'; 

    document.getElementById("divWaiting").style.visibility = 'Visible';     //Make div visible
    document.getElementById("divWaiting").style.backgroundColor = "#FF0000" //background = red

}

function changeIDClick() { //Changes ID to 'Click' and Starts reaction timer
    
    var startTime = Date.now();   //Returns number of milliseconds since January 1, 1970

    reactTimer = setInterval( () => {                                                         

        reactionTime = Date.now() - startTime;
        console.log((reactionTime / 1000).toFixed(3)); //Returns time up until the third decimal point

    }, 100);


    document.getElementById("divWaiting").style.visibility = 'hidden'; 
    document.getElementById("divWaiting").id = "divClick";

    element = document.getElementById("divClick")
    console.log(element);

    document.getElementById("divClick").style.visibility = 'visible';     //Make div visible
    document.getElementById("divClick").style.backgroundColor = "#008000" //background = green
    document.getElementById("start").innerHTML = "Click";
    
    document.getElementById("divClick").style.pointerEvents = 'initial';
    document.getElementById("divClick").onclick = function() {click()};

    
    
}

function start(){ //Starts waiting phase for some time

    const randTimer = setTimeout(() => {                            //Set random time
   
        //console.log(random);
        changeIDClick();                                            //After random time, swtich to green
        
    }, random)
    
    changeIDWait();                                                 //Change id -> waiting
    setTimeout(randTimer, random);                                  //Call timer
    clearTimeout(random);                                           //Clear timer to generate new time
    
}


function click () { //Click to get reaction time

    clearInterval(reactTimer);
    document.getElementById("start").innerHTML = "Your reaction time is " + (reactionTime / 1000).toFixed(3) + "s";
    curTime = (reactionTime / 1000).toFixed(3)
    console.log(curTime)
    

    //Make button / best time visible after clicking
    document.getElementById("resetButton").style.visibility = 'visible';
    document.getElementById("resetButton").style.pointerEvents = 'auto';
    document.getElementById("bestTime").style.visibility = 'visible';

    showBestTime()

}

function showBestTime() {               //Display the best time
    console.log(curTime, bestTime)
    if (curTime >= bestTime) {

        document.getElementById("bestTime").innerHTML = "Your best time is " + bestTime +"s";

    }

    else {
        bestTime = curTime
        document.getElementById("bestTime").innerHTML = "Your best time is " + bestTime +"s";

    }

}


function resetGame() { 

    //set id divClick back to divStart
    document.getElementById("divClick").id = "divStart";
       
    //Initiate "start" function to being at the red screen again
    document.getElementById("divStart").onclick = function() {start()}; 
   
}

