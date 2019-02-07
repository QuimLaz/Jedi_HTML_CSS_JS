var id = 1;

function displayPokemon() {
	$.get('http://51.144.236.83:8080/pokemons/' + id, function(data) {
		$("#Code").text(data.num);
		$("#NormalSprite").attr("src", data.images[0].front);
		$("#ShinySprite").attr("src", data.images[1].front_shiny);
		$("#Name").text(data.name);
		if (data.types[1] != null) $("#Type").text(data.types[0].type.name + "/" + data.types[1].type.name);
		else $("#Type").text(data.types[0].type.name);
		if (data.moves.HM != null) $("#HM").text(data.moves.HM);
		else $("#HM").text("none")
	}, "json");
}

$(function() {
	displayPokemon();
});

function next() {
	id++;
	if (id > 6) id = 1;
	displayPokemon();
}

function previous() {
	id--;
	if (id < 1) id = 6;
	displayPokemon();
}