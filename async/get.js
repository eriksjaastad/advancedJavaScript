var request = require("request");
var fs = require("fs");

// request("http://google.com", function(err, res, body) {
// 	console.log(body);
// });

var req = request.get("http://google.com");
// Get the sources code from google
// req.on("response", function(response) {
// 	console.log(response);
// });

// Add a buffer so you can see the different packes
// req.on("data", function(buffer) {
// 	console.log("\n\n Buffer: ", buffer.toString());
// });
// req.on("error", function(err) {
// 	console.log(err);
// });

// make a done event
req.on("end", function() { console.log("done!")})

// Piping output to a file
var output = fs.createWriteStream("download.html");
req.pipe(output);