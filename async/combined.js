// read urls.txt *async
// split urls.txt on each line
// for each url we're going to request it *request
// create output
// pipe the request to a file
// when done, logout errors and done
var fs = require("fs"),
	async = require("async"),
	request = require("request"),
	url = require("url");

fs.readFile("urls.txt", "utf-8", function(err, file) {
	//console.log(file);
	var list = file.split("\n");
	//console.log(list);
	async.each(list, function(line, callback) {
		// for each item
		if(!line) return callback();
		var parsed = url.parse(line);
		//console.log(parsed);
		var output = fs.createWriteStream(parsed.host + ".html");
		var req = request.get(line);
		req.pipe(output);
		req.on("end", callback)
	}, function(err) {
		//all done
		if(err) console.log(err);
		console.log("All done");
	});
});
