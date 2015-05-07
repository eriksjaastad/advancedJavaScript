//var fs = require("fs");
var files = require("./files");
console.log(files);
var whenRead = function(err, data) {
	if(err) {
		return console.log("Couldn't read file");
	}
	console.log("file contains: ", data);
};
//fs.readFile("sample.txt", "utf8", whenRead);
files.read("sample.txt", whenRead);


var request = require("request");
var url = "https://raw.githubusercontent.com/eriksjaastad/mean-stack/master/README.md";
request(url, function(err, response, body) {
	console.log(body.length);
})