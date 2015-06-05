var Backbone = require("backbone"),
	sql = require("../database"),
	Reminder = require("./reminder");

var	ReminderList = Backbone.Collection.extend({
		model: Reminder,
		load: function(callback) {
			var self = this;
			//select all reminders from database
			var q = "SELECT * FROM reminders;"
			sql.connection.all(q, function(err, results) {
				//fill this list with Reminders
				self.reset(results);
				callback();
			});
		}
	});

module.exports = ReminderList;