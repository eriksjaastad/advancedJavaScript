/*
/views - templates go here
/assets | /public - css, js, images
/handlers - controllers
/models - Backbone modles
/routes.js - contains all the routing
/database.js - start and config SQLite3
*/
var hapi = require("hapi"),
	server = new hapi.Server();

server.connection({port:8000});
server.views({
	engines: {
		html: require("handlebars")
	},
	path: "./views",
	isCached: false
});

var Reminder = require("./models/reminder");

var sql = require("./database");
sql.init(function() {
	console.log("databe ready");
	var reminder = new Reminder({
		task: "Start server"
	});
	reminder.create(function(err) {
		if(err) {
			console.log(err);
		}
		//test database
		// sql.connection.all("SELECT * FROM reminders", function(err, results) {
		// 	console.log(err, results);
		// });
	});
	server.start();
});

var routes = require("./routes");
server.route(routes);