var fs = require("fs");
try{
	fs.renameSync("./lib/assets/logs", "./lib/logs");
}
catch (err){
	console.log(err);
} 

console.log("Directory moved");

fs.rmdir("./lib/assets", function(err) {
	if (err)
		console.log(err);
	else
		console.log("assets directory removed");
});
try{
	fs.readdirSync("./lib/logs").forEach(function(fileName) {
		fs.unlinkSync("./lib/logs/" + fileName);
	});
}
catch (err)
{
	console.log(err);
}
fs.rmdir("./lib/logs", function(err) { 
	if (err)
		console.log(err);
	else
		console.log("logs directory removed");
});