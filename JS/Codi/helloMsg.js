function hello() {
	var name = prompt("Introdueix el teu nom: ");
	if (name != null) {
		document.getElementById("Missatge").innerHTML = "Hola " + name + ", com està vosté?";
	}
}

function helloInput() {
	var name = document.getElementById("nom").value;
	if (name != null) {
		document.getElementById("Missatge").innerHTML = "Hola " + name + ", com està vosté?";
	}
}

window.onload = function() {hello();}