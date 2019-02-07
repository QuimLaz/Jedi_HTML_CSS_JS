$(function() {
	window.setInterval(rotate, 10);
	window.setInterval(moveCircular, 10);
});

var rot = 0;
var rotC = 0;
var H = 200;
var W = 300;


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function rotate() {
	rot += 1;
	if (rot%360 === 0) $("#rotator").css("background-color", getRandomColor());
	$("#rotator").css({"transform" : "rotateY(" + rot + "deg)"});
}

function bigger() {
	H += 50;
	W += 50;
	$("#sizeChanger").animate({
		height: H + "px",
		width: W + "px"
	},400);
}

function smaller() {
	H -= 50;
	W -= 50;
	$("#sizeChanger").animate({
		height: H + "px",
		width: W + "px"
	},400);
}

function moveCircular() {
	rotC += 1;
	$("#base").css({"transform" : "rotateZ(" + rotC + "deg)"});
}

function fadeOut() {
	$("#fade").animate ({
		opacity: 0
	}, 500);
}