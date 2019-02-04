window.onload = function() {
	window.setInterval(update, 2000);
}

var i = 1;

function update() {
	if (i === 0) {
		document.getElementById("panell").src = "../Imatges/red.png";
		i++;
	}
	else if (i === 1) {
		document.getElementById("panell").src = "../Imatges/blue.png";
		i++;
	}
	else {
		document.getElementById("panell").src = "../Imatges/green.png";
		i = 0;
	}
}