var fs = require("fs");

if (fs.existsSync("testdir")) {
	console.log("Directory already exists");
}
else{
	fs.mkdir("testdir", function(err){
		//cuases jshint errors if uncommented
		//(err) ? console.log(err) : console.log('Directory Created');
		if(err){
			console.log(err);
		}
		else
		{
			console.log("Directory Created");
		}
	});
}

