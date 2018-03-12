function showTime(){
    var now        =  new Date(),
    hours      =  now.getHours(),
    minutes    =  now.getMinutes(),
    seconds    =  now.getSeconds();
  if(hours < 10){
      hours   = '0' + hours;
     }
    if(minutes < 10){
      minutes = '0' + minutes;
     }
    if(seconds < 10){
      seconds =  '0' + seconds;
     }
 document.getElementById('clock').textContent = hours + '      ' + ':' + '      ' + minutes + '      ' + ':' + '      ' + seconds;
}



function showDate(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
		dd = '0'+dd
	} 

	if(mm<10) {
		mm = '0'+mm
	} 

	today = mm + '/' + dd + '/' + yyyy;
	 document.getElementById('date').textContent = today;
}

function showDate(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
		dd = '0'+dd
	} 

	if(mm<10) {
		mm = '0'+mm
	} 

	today = mm + '/' + dd + '/' + yyyy;
	 document.getElementById('date').textContent = today;
	}

window.onload = function(){
  "use strict";
  setInterval(showTime, 500);
   setInterval(showDate, 500);
}

window.onload = function(){
	  "use strict";
	  setInterval(showTime, 500);
	   setInterval(showDate, 500);
	   animation();
}

function animation()	{
	
	// init message
	var message = document.getElementById('circle');

	// tween message
	TweenMax.to(message, 100, {
		left: 1000,
		ease: Power0.easeNone,
		repeat: 1000
	});
}
