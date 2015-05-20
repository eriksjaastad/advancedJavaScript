var async = require("async"),
	fs = require("fs");

var find_needle = function(dir, done) {
	var result = [];
	fs.readdir(dir, function(err, list) {
		if(err) return(done, err);
		async.each(list, function(line, callback) {
			if(!line) return callback();
			//console.log(line);
			fs.readFile(dir + '/' + line, 'utf-8', function(err, data) {
				if(err) {
					return console.log(err);
				}
				var foundIt = data.search("needle");
				if(foundIt > 0) {
					console.log(data + ": " + line + "\n\n");
					console.log("Found it! " + foundIt);
				}
			});

			callback();
		}, function(err){
			if(err) console.log(err);
			//console.log("all finished");
		});
	});
};

find_needle("./lab-files");