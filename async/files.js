var fs = require("fs");

var read = function(filename, callback) {
	fs.readFile(filename, "utf8", function(err, data) {
		if(err) return callback(err);
		data = data + "...";
		callback(null, data);
	});
};

console.log("hello from files.js module");

module.exports = {
	read: read
};