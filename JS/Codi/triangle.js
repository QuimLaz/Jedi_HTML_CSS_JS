window.onload = function() {
	window.setInterval(move, 500);
}

function clacRandomInc(mod) {
	return Math.floor(Math.random() * mod) - Math.floor(Math.random() * mod);
}

function applyIncrement(inc) {
	document.getElementById("triangleDown").style.left = inc + "px";
	document.getElementById("triangleDown").style.right = inc + "px";
	document.getElementById("triangleDown").style.top = inc + "px";
	document.getElementById("triangleDown").style.bottom = inc + "px";
}

function move() {
	var module = 100;
	var inc = clacRandomInc(module);
	applyIncrement(inc);
}