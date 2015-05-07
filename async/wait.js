var wait = function(input, callback) {
	setTimeout(function() {
		callback(null, input);
	}, Math.round(Math.random() * 1000));
};

module.exports = wait;