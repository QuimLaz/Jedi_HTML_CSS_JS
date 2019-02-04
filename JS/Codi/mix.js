window.onload = function() {
	window.setInterval(update, 2000);
	window.setInterval(updateTime, 1000);
}

var i = 0;
var aux = 0;
var time = 0;

function showRed() {
	document.getElementById("carroussel").src = "../Imatges/red.png";
}

function showBlue() {
	document.getElementById("carroussel").src = "../Imatges/blue.png";
}

function showGreen() {
	document.getElementById("carroussel").src = "../Imatges/green.png";
}

function update() {
	i++;
	aux=i%3;
	if (aux === 0) {
		showRed();
	}
	else if (aux === 1) {
		showBlue();
	} 
	else {
		showGreen();
	}
}

function updateTime() {
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
	if (hours >= 10 && minutes >= 10) document.getElementById("clock").innerHTML = hours + ":" + minutes; 
	else if (hours < 10 && minutes >= 10) document.getElementById("clock").innerHTML = "0" + hours + ":" + minutes;
	else if (hours >= 10 && minutes < 10) document.getElementById("clock").innerHTML = hours + ":" + "0" + minutes;
	else document.getElementById("clock").innerHTML = "0" + hours + ":" + "0" + minutes;
}

function writeInput() {
	var name = document.getElementById("nom").value;
	if (name != null) {
		document.getElementById("Missatge").innerHTML = "Hola " + name + ", com està vosté?";
	}
}