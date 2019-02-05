window.onload = function() {
	window.setInterval(move, 500);
}

function clacRandomInc(mod) {
	return Math.floor(Math.random() * mod) - Math.floor(Math.random() * mod);
}

function applyIncrements(incH,incV) {
	document.getElementById("triangleDown").style.left = incH + "px";
	document.getElementById("triangleDown").style.top = incV + "px";
}

function move() {
	var module = 100;
	var incH = clacRandomInc(module);
	var incV = clacRandomInc(module);
	applyIncrements(incH,incV);
}