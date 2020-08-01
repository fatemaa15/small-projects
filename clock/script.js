var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

//current time
var showCurrentTime = function() {
	//display string on webpage
	var clock = document.getElementById('clock');

	var currentTime = new Date();

	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var meridian = "AM";

	//set hours
	if(hours >= noon) {
		meridian = "PM";
	}
	if(hours >= noon) {
		hours = hours - 12;
	}

	//set minutes
	if(minutes < 10){
		minutes = "0" + minutes;
	}
	//set seconds
	if(minutes < 10){
		seconds = "0" + seconds;
	}
	//string put together 
	var clockTime = hours +':' + minutes + ':' + 
	seconds + " " + meridian + "!";

	clock.innerText = clockTime;
};

// clock increament on its own
var updateClock = function() {
	var time = new Date().getHours();
	var messageText;
    var image = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Alarm_Clock_Vector.svg/1024px-Alarm_Clock_Vector.svg.png"
    
    var timeEventJS = document.getElementById("timeEvent");
    var lolcatImageJS = document.getElementById('lolcatImage');


       if (time == partytime) {
       	messageText = "Let's party!";
       }
       else if (time == wakeuptime) {
       	messageText = "Wake up!";
       } 
       else if (time == lunchtime) {
       	messageText = "Let's have some lunch!";
       }
       else if (time == naptime) {
       	messageText = "Sleep tight!";
       }
       else if (time < noon) {
       	messageText = "Good morning!";
       }
       else if (time >= evening) {
       	messageText = "Good evening!";
       }
       else {
       	messageText = "Good afternoon!";
       }

       console.log(messageText);
       timeEventJS.innerText = messageText;
       lolcatImage.src = image;

       showCurrentTime();

};
updateClock();


// incrementing once a second
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

//getting party time to work

var partyButton = document.getElementById("partyTimeButton");

var partyButton = function()
{
	if(partytime < 0) {
		partytime = new Date().getHours();
		partyTimeButton.innerText = "Party Over!";
		partyTimeButton.style.backgroundColor = "#0A8DAB";
	}
	else {
		partytime = -1;
		partyTimeButton.innerText = "Party Time!";
		partyTimeButton.style.backgroundColor = "#222";
	}

};

partyButton.addEventListener("click", partyEvent);
partyEvent(); 

// Activates Wake-Up selector
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);

// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);