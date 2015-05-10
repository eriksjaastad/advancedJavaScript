var fs = require("fs"),
	hapi = require("hapi"),
	server = new hapi.Server();

server.connection({ port: 8000});
server.start();

server.views({
	path: "./templates",
	engines: {
		html: require("handlebars")
	},
	isCached: false, //remove for production
	layoutPath: "./layouts",
	layout: "default",
	partialsPath: "templates/partials"
});

server.route({
	method: "GET",
	path: "/",
	handler: function(req, reply) {
		reply.view("index", {
			title: "Home"
		});
	}
});

server.route({
	method: "GET",
	path: "/stuff",
	handler: function(req, reply) {
		//replace the fs.readFile with
		//db.all("SELECT * FROM STUFFS", function(err, stuffList)) {
		//or a call to a noSQL database
		fs.readFile("stuff.json", "utf8", function(err, data) {
			var stuffList = JSON.parse(data);
			reply.view("stuff", {
				title: "Stuff",
				admin: true,
				stuff: stuffList
			});
		});
	}
});

server.route({
	method: "GET",
	path: "/assets/{param*}",
	handler: {
		directory: {
			path: "public"
		}
	}
});