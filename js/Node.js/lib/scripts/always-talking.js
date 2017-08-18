var sayings = [
	"Hello Tequilla Goodbye Problems",
	"True Rune",
	"Snowe",
	"Millay",
	"Island Nation Liberation"
];

var interval = setInterval(function () {
	var i = Math.floor(Math.random() * sayings.length);
	process.stdout.write(`${sayings[i]} \n`);
}, 1000);

process.stdin.on("data", function(data) {
	console.log(`STDIN Data Recieved -> ${data.toString().trim()}`);
	clearInterval(interval);
	process.exit();	
});