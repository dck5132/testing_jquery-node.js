var https = require("https");
var fs = require("fs");

var options = {
	hostname: "en.wikipedia.org",
	port: 443,
	path: "/wiki/Suikoden_IV",
	method: "GET"
};

var req = https.request(options, function(res){
	var responseBody = "";
	
	console.log("Response from server started");
	console.log(`Server Status: ${res.statusCode}`);
	console.log("Response Headers: %j", res.Headers);
	
	res.setEncoding("UTF-8");
	
	res.once("data", function(chunk) {
		console.log(chunk);
	});
	
	res.on("data", function(chunk) {
		console.log(`--chunk-- ${chunk.length}`);
		responseBody+=chunk;
	});
	
	res.on("end", function() {
		fs.writeFile("Cyril-Shadow.html", responseBody, function(err) {
			if(err)
				console.log(err);
			
			console.log("File Downloaded");
		});
		
	});
});

req.on("error", function(err) {
	console.log(`problem with request: ${err.message}`);
});

req.end();