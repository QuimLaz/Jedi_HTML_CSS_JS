$(function() {
	$("#showpeople").text("hola");
	$.get("https://swapi.co/api/people/2/?format=json", function(
		data) {
		$("#showpeople").text(data.name);
		}, "json");
});