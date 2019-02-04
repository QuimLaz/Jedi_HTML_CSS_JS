window.onload = function() {
	window.setInterval(update, 1000);
}

function update() {
	var seconds = 0;
	var minutes = 0;
	var hours = 0;
	time += 1;
	var displayTime = time;
	seconds = displayTime%60;
	if (displayTime >= 60) {
		displayTime /= 60;
		displayTime = Math.floor(displayTime);
		minutes = displayTime%60;
		if (displayTime >= 60) {
			displayTime /= 60;
			displayTime = Math.floor(displayTime);
			hours = displayTime%24;
			if (hours > 24) time = 0;
		}
	}
	if (hours >= 10 && minutes >= 10) document.getElementById("panell").innerHTML = hours + ":" + minutes; 
	else if (hours < 10 && minutes >= 10) document.getElementById("panell").innerHTML = "0" + hours + ":" + minutes;
	else if (hours >= 10 && minutes < 10) document.getElementById("panell").innerHTML = hours + ":" + "0" + minutes;
	else document.getElementById("panell").innerHTML = "0" + hours + ":" + "0" + minutes;
}

var time = 0;