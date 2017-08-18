var Person = require("./lib/Person");

/* //var events = require("events");
var EventEmitter = require("events").EventEmitter;

var util = require("util");

/* var eventEmitter = new events.EventEmitter();

eventEmitter.on("customEvent", function(message, status) {
	console.log(`${status}: ${message}`);
});

eventEmitter.emit("customEvent", "Hello World", 200); 

var Person = function(name) {
	this.name = name;
};

util.inherits(Person, EventEmitter); */

var cyril = new Person("Cyril Shadow");
var millay = new Person("Millay");

cyril.on("speak", function(said) {
	console.log(`${this.name}: ${said}`);	
});

millay.on("speak", function(said) {
	console.log(`${this.name} -> ${said}`);
});

cyril.emit("speak", "Hello Tequilla, Goodbye Problems");
millay.emit("speak", "Fire");