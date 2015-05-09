var request = require("request"),
	cheerio = require("cheerio"),
	nodeInspector = require("node-inspector");

var url = "https://en.wikipedia.org/wiki/May_8";
request(url, function(err, responce, body) {
	$ = cheerio.load(body);
	// console.log($('#Births').parent('h2').next('ul').html());
	// console.log($('#Deaths').parent('h2').next('ul').html());
	var makeList = function(bd) {
		list = $('#' + bd + '').parent('h2').next('ul').html();
		list = list.split("\n");
		return list;
	};
	// var births = $('#Births').parent('h2').next('ul').html(),
	// 	deaths = $('#Deaths').parent('h2').next('ul').html();

	var count = function(bd) {
		list = bd.split("\n");
		return list.length
	};

	var names = function(bd) {
		list = bd.getElementsByTagName('a');
		return list.innerHTML;
	};

	console.log(makeList('Births'));

	// console.log(births);
	// console.log(births('a').innerHTML);
	// console.log('Number of Births ' + count(births) + 
	// 			': Number of Deaths ' + count(deaths));
});