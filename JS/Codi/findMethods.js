window.onload = function() {write();}

function write() {
	document.getElementById("first").innerHTML = "FIRST";
	document.getElementsByClassName("second")[0].innerHTML = "SECOND";
	document.getElementsByClassName("second")[1].innerHTML = "SECOND";
	document.getElementsByTagName("div")[3].innerHTML = "THIRD";

}