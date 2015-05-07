var hapi = require("hapi"),
	server = new hapi.Server();

server.connection({
	port:8000
});
server.start(function() {
	console.log(server.info);
});

var counter = 0;

server.route({
	method: "GET",
	path: "/{name?}",
	handler: function(request, reply) {
		//console.log(request.headers);
		var name = request.params.name || "Anon";
		counter++;
		console.log(request.params);
		reply("Hello, " + name + " " + counter);
	}
});

server.route({
	method: "GET",
	path: "/{name}/{id}",
	handler: function(request, reply) {
		reply(request.params.name + " | " + request.params.id);
	}
});