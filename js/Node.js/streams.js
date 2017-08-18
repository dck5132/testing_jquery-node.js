var fs = require("fs");
var stream = fs.createReadStream("./chat.log", "UTF-8");
var data = "";

stream.once("data", function() {
	console.log("\n\n\n\n\n Started reading file \n\n\n\n\n");
});

stream.on("data", function(chunk) {
	process.stdout.write(`   chunk: ${chunk.length}  |
	`);
	data+=chunk;
});

stream.on("end", function() {
	console.log(`
	
	
	Finished reading file : ${data.length}
	
	
	`);
});
/* fs.readFile("./chat.log", "UTF-8", function(err, chatlog) {
	console.log(`There are ${chatlog.length} lines`);
});

console.log("Reading File"); */

