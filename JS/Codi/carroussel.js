window.onload = function() {
	window.setInterval(update, 2000);
}

var i = 0;
var aux = 0;

function showRed() {
	document.getElementById("panell").src = "../Imatges/red.png";
}

function showBlue() {
	document.getElementById("panell").src = "../Imatges/blue.png";
}

function showGreen() {
	document.getElementById("panell").src = "../Imatges/green.png";
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

function goLeft() {
	i--;
	aux=i%3;
	if (aux === 0) {
		showGreen();
	}
	else if (aux === 1) {
		showRed();
	}
	else showBlue();
}