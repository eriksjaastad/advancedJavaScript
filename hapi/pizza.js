//pizza.js
var hapi = require("hapi"),
	server = new hapi.Server(),
	orders = require("./orders");

server.connection({ port: 8000 });
server.start();

server.views({
	path: "templates",
	engines: {
		html: require("handlebars")
	},
	isCached: false
});

server.route({
	method: "GET",
	path: "/{name?}",
	handler: function(req, reply) {
		var name = req.params.name || "Anon";
		reply.view("index.html", {
			user: name
		});
	}
});

server.route({
	method: "POST",
	path: "/order",
	handler: function(req, reply) {
		orders.add(req.payload);
		reply.view("index.html", {
			pizzas: orders.pizzas
		});
	}
});