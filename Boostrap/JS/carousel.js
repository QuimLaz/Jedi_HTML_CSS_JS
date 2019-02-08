$(function() {
	window.setInterval(update, 2000);
});

var i = 0;
var aux = 0;

function showCat1() {
	$("#panell").attr("src", "Imatges/cat-1.jpg");
}

function showCat2() {
	$("#panell").attr("src", "Imatges/cat-2.jpg");
}

function showCat3() {
	$("#panell").attr("src", "Imatges/cat-3.jpg");
}


function update() {
	i++;
	aux=i%3;
	if (aux === 0) {
		showCat1();
	}
	else if (aux === 1) {
		showCat2();
	} 
	else {
		showCat3();
	}
}

function goLeft() {
	i--;
	aux=i%3;
	if (aux === 0) {
		showCat3();
	}
	else if (aux === 1) {
		showCat1();
	}
	else showCat2();
}