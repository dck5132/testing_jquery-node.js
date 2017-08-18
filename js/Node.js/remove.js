var fs = require("fs");

try{
	fs.unlink("./lib/config.json");
}
catch (err) {
	console.log(err);
}

fs.unlink("./notes.md", function(err){
	if (err)
		console.log(err);
	else
		console.log("succesfully deleted files");
});