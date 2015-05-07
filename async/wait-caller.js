var wait = require("./wait");

var fib = [1, 1, 2, 3, 5, 8, 11];
var output = [];
wait("information", function(err, data) {
	console.log(data);
});

//asynchronous loop, finishes before 
// fib.forEach(function(item) {
// 	wait(item, function(err, data) {
// 		output.push(item * 2);
// 	});
// });

// console.log(output);

//async loop that works
var async = require("async");

async.map(fib, function(item, callback) {
	wait(item, function(err, data) {
		callback(null, data * 2);
	});
}, function() {
	//we are done with waiting
	console.log(output);
});


//ordering functions without async
wait(0, function(err, data) {
	console.log("one");
	wait(0, function(err, data) {
		console.log("two");
		wait(0, function(err, data) {
			console.log("three");
		});
	});
});

//ordering functions using async waterfall
async.waterfall([
	function(c){
		console.log(1);
		wait(1, c);
	},
	function(data, c) {
		console.log(2);
		wait(2, c);
	},
	function(data, c) {
		console.log(3);
		wait(3, c);
	}
], function() {
	console.log("all done");
});
