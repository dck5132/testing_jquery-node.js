var waitTime = 3000;
var currentTime = 0;
var waitInterval = 10;
var percentWaited = 0;
//console.log("Waiting....");

function waitingPercent(p) {
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write(`You have been waiting.... ${p}%`);
}

var interval = setInterval(function() {
	currentTime+=waitInterval;
	percentWaited = Math.floor((currentTime/waitTime) * 100);
	waitingPercent(percentWaited);
	//console.log(`It has been ${currentTime/1000} seconds`);
}, waitInterval);

setTimeout(function() {
	clearInterval(interval);
	waitingPercent(100);
	console.log("\n\n\n\ndone\n\n\n");
}, waitTime);

process.stdout.write("\n\n\n");
waitingPercent(percentWaited);