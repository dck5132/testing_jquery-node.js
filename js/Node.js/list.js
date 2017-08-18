var fs = require("fs");
// reads files and outputs them after this line is done due to sync
//var files = fs.readdirSync("./lib");

//console.log(files);

fs.readdir("./lib", function(err, files) {
	
	if (err)
		throw err;
	else
		console.log(files);
});

console.log("Done reading files...");