var express = require("express");
var http = require("http");
var app = new express();
var server = http.createServer(app).listen(8080);
var io = require("socket.io")(server);

app.use(express.static("./lib/websocket/"));

io.on("connection", function(socket){
	
	socket.on("chat", function(message) {
		socket.broadcast.emit("message", message);		
	});
	socket.emit("message", "Welcome to Chat");
});

console.log("Starting Socket App - listening on port 8080");
