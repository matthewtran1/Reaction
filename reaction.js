//REACTION GAME
//Var
var random = Math.floor((Math.random() * 2000) + 1000); //Generate random number from 1 to 3
let reactionTime;
let reactTimer;
let element = document.getElementById("divStart");
let score;

document.getElementById("divStart").onclick = function() {start()}; //Initiate "start" function once clicked

function changeIDWait() { //Changes from 'Start' to 'Waiting'

    document.getElementById("divStart").style.pointerEvents = 'none';
    document.getElementById("divStart").style.visibility = 'hidden';        //hide div
    document.getElementById("start").innerHTML = ".....";                   //change div text
    document.getElementById("instructions").innerHTML = " ";                     //hide instructions
    

    document.getElementById("divStart").id = "divWaiting";                  //Switch id to waiting

    element = document.getElementById("divWaiting")
    console.log("Current id is: " + element);

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
   
        console.log(random);
        changeIDClick();                                            //After random time, swtich to green
        
    }, random)
    
    changeIDWait();                                                 //Change id -> waiting
    setTimeout(randTimer, random);                                  //Call timer
    clearTimeout(random);                                           //Clear timer to generate new time
    
}


function click () { //Click to get reaction time

    clearInterval(reactTimer);
    document.getElementById("start").innerHTML = "Your reaction time is " + (reactionTime / 1000).toFixed(3) + "s";
    document.getElementById("divClick").style.pointerEvents = 'none'; 
    

}


/* Reset Function: Not working --- Currenly using window refresh function to reset game
function resetGame() { //Reset game to default settings

    if (element = document.getElementById("divReact")) { //check which id is currently used

        document.getElementById("start").innerHTML = "Press to Start"; 
        document.getElementById("divReact").style.backgroundColor = "#808080"; 

    }

    else if (element = document.getElementById("divWaiting")) { //check which id is currently used

        clearTimeout(random);
        document.getElementById("divWaiting").style.visibility = 'hidden';  
        document.getElementById("start").innerHTML = "Press to Start"; 
        document.getElementById("divWaiting").id = "divReact";  
        document.getElementById("divReact").style.pointerEvents = 'initial';
        document.getElementById("divReact").style.backgroundColor = "#808080"; 
        document.getElementById("divReact").style.visibility = 'visible';                   
     

    }

    else if (element = document.getElementById("divClick")) {

        clearInterval(reactTimer);
        document.getElementById("divClick").style.visibility = 'hidden';  
        document.getElementById("start").innerHTML = "Press to Start"; 
        document.getElementById("divClick").id = "divReact";  
        document.getElementById("divReact").style.pointerEvents = 'initial';
        document.getElementById("divReact").style.backgroundColor = "#808080"; 
        document.getElementById("divReact").style.visibility = 'visible';                   
       

    }

}
*/
/* Clicking too fast will result in reactiontime = "NaNs" */
/* Add highscore holder, previous score holder..etc */