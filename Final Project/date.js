"use strict";

runClock()
setInterval("runClock()", 1000);

//Function to run clock
function runClock()
{
    

    //Store the current date and time
    var currentDay = new Date();
    var dateStr = currentDay.toLocaleDateString();
    var timeStr = currentDay.toLocaleTimeString();



    //Display the current date and time
    document.getElementById("dateNow").innerHTML= dateStr + "<br />" + timeStr;

    //Calculate the hours left in the current day
    var hrsLeft = (daysLeft-Math.floor(daysLeft))* 24;

    //Caluclate the minutes and  seconds left in the current hours
    var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;

    
}