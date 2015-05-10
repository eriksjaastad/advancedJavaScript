var request = require("request"),
	cheerio = require("cheerio"),
	nodeInspector = require("node-inspector");

var url = "https://en.wikipedia.org/wiki/May_8";
request(url, function(err, responce, body) {
	$ = cheerio.load(body);
	// var births = $('#Births').parent('h2').next('ul').html(),
	// 	deaths = $('#Deaths').parent('h2').next('ul').html();
	var each = function(list, f) {
		for(var i = 0; i < list.length; i++) {
			var name = list[i];
			f(name, i)
		}
	};

	var makeList = function() {
		data = $('#Births').parent('h2').next('ul').html();
		list = data.split("\n");

		// return list.length;
	};

	// var count = function(name,  index) {
	// 	console.log(name + " " + index);
	// };

	// var names = function(bd) {
	// 	list = bd.getElementsByTagName('a');
	// 	return list.innerHTML;
	// };


	each(makeList, count);
	//console.log(makeList('Births'));
	// console.log(births);
	// console.log(births('a').innerHTML);
	// console.log('Number of Births ' + count(births) + 
	// 			': Number of Deaths ' + count(deaths));
});