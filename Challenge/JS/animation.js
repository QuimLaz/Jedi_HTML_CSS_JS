$(function() {
	window.setInterval(rotate, 1);
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
	rot += 10;
	$("#rotator").css("background-color", getRandomColor());
  $("#container").css("background-color", getRandomColor());
	$("#rotator").css({"transform" : "rotateY(" + rot + "deg)"});
  $("#titol").css({"transform" : "rotateX(" + rot + "deg)"});
  $("#titol2").css({"transform" : "rotateZ(" + rot + "deg)"});
}