
var counter = 0;
var interval;
var errorArea=document.getElementById("error-display");
var givenText="No matter how carefully you plan your goals they will never be more than pipe dreams unless you purse them with gusto."
var divDisplay=document.getElementById("timerDisplay");
function startCount(){
counter++;
}

function startTyping(){
    interval= setInterval(startCount,1000);
}
function endTyping(){
    clearTimeout(interval);
   // console.log(divDisplay);
    divDisplay.innerText=counter+" seconds";
    divDisplay.style.display="block";
    console.log(!(document.getElementById("box").value == givenText));
    if(!(document.getElementById("box").value === givenText)){
        
        errorArea.innerText="You Entered Invalid Text..!";
        errorArea.style.display="block";
}
    console.log(counter);
}
function reset(){
    document.getElementById("box").value="";
    divDisplay.style.display="none";
    errorArea.style.display="none";
}
//startTyping();
//setTimeout(endTyping,3000);