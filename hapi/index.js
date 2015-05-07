var hapi = require("hapi"),
	server = new hapi.Server();

server.connection({
	port:8000
});
server.start(function() {
	console.log(server.info);
});