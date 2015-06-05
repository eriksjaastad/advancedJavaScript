var sqlite = require("sqlite3");

var facade = {
	connection: null,
	init: function(callback) {
		var db = new sqlite.Database("reminder.db");
		facade.connection = db;
		db.run("CREATE TABLE IF NOT EXISTS reminders(task, complete)", function() {
			callback();
		});
	}
};

module.exports = facade;