var request = require("request"),
	cheerio = require("cheerio"),
	nodeInspector = require("node-inspector");

var url = "https://en.wikipedia.org/wiki/May_8";

request(url, function(err, responce, body) {
	var $ = cheerio.load(body);
	var title = [], count, names = [];
	var json = {title : '', count : '', names: ''};

	var getInfo = function(id) {
		$('#' + id + '').filter(function(){
			title = $(this).text();
			$(this).parent().next().children().children().each(function(i, el){
				names[i] = $(this).next('a:nth-child(2)').text();
			});

			json.title = title;
			json.count = names.length;
			json.names = names.filter(Boolean);
		});
	};

	var each = function(list, f) {
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			f(item, i);
		}
	};
	var bd = ['Births', 'Deaths'];
	each(bd, getInfo);
	console.log(json);
});