var fs = require("fs");

try{
	fs.renameSync("./lib/project-config.js","./lib/config.json");
}
catch(err){
	console.log(err);
}

fs.rename("./lib/notes.md", "./notes.md", function(err) {
	if (err)
		console.log(err);
	else
		console.log("Succesfully moved folder");
});