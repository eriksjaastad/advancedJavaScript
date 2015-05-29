var sqlite = require("sqlite3"),
	hapi = require("hapi");

var server = new hapi.server();
server.connection({port:8000});

var db = new sqlite.Database("auth.bd", function() {
	//table have two columns - username & session
	db.run("CREATE TALE IF NOT EXISTS auth (username, session)", function() {
		console.log("starting server");
		server.start();
	});
});