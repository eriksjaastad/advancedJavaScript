"use strict";
var request = require("request"),
	cheerio = require("cheerio");

var url = "https://en.wikipedia.org/wiki/May_8";

request(url, function(err, responce, body) {
	var $ = cheerio.load(body);
	var title = [], count = [], names = [];
	var json = {title : '', count : '', names: ''};

	var getInfo = function(id, i) {
		$('#' + id + '').filter(function(){
			title[i] = $(this).text();

			$(this).parent().next().children().children().each(function(i, el){
				names[i] = $(this).next('a:nth-child(2)').text();
			});

			count[i] = names.length;

			json.title = title;
			json.count = count;
			json.names = names.filter(Boolean);
		});
	};

	var each = function(list, f) {
		var i, item;
		for (i = 0; i < list.length; i+=1) {
			item = list[i];
			f(item, i);
		}
	};
	var bd = ['Births', 'Deaths'];
	each(bd, getInfo);
	console.log(json);
});