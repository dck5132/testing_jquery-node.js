//var events = require("events");
var EventEmitter = require("events").EventEmitter;

var util = require("util");

/* var eventEmitter = new events.EventEmitter();

eventEmitter.on("customEvent", function(message, status) {
	console.log(`${status}: ${message}`);
});

eventEmitter.emit("customEvent", "Hello World", 200); */

var Person = function(name) {
	this.name = name;
};

util.inherits(Person, EventEmitter);

module.exports = Person;