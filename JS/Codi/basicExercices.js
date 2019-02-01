function square(x){
	return x*x;
}

function oddOrEven(x) {
	if (x%2 === 0) {
		return 'even';
	}
	else return 'odd';
}

function factorial(x) {
	var result = x;
	for (var i = 1; i < x; i++) result *= i;
	return result;
}

function random100() {
	return Math.floor((Math.random() * 100) + 1);
}

function biggestOf4(x, y, z, w) {
	if (x > y && z > w) {
		if (x > z) return x;
		else z;
	}
	else if (x < y && z < w) {
		if (y > w) return y;
		else return w;
	}
	else if (x > y && z < w) {
		if (x > w) return x;
		else return w;
	}
	else {
		if (y > z) return y;
		else return z;
	}
}

function otherFunc() {
	return square(random100());
}

function months() {
	var array = ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"];
	console.log(array);
	return 0;
}