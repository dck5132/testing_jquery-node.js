var exec = require("child_process").exec;

//("start http://www.google.com");
//exec("start cmd");
 exec("dir", function(err, stdout) {
	
	if(err){
		throw err;
	}
	console.log("listing finished");
	console.log(stdout);
	
});
exec("git version", function(err, stdout) {
	
	if(err){
		throw err;
	}
	console.log("git version executed");
	console.log(stdout);
	
});