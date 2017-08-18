var http = require("http");
var fs = require("fs");

http.createServer(function(req,res) {
	
	if(req.method === "GET"){
		res.writeHead(200, {"Content-Type" : "text/html"});
		fs.createReadStream("./lib/public/form.html", "UTF-8").pipe(res);
	}
	else if(req.method === "POST"){
		var body ="";
		req.on("data", function(chunk){
			body+=chunk;
		});
		req.on("end", function() {
			res.writeHead(200, {"Content-Type": "text/html"});
			res.end(`
			<DOCTYPE html>
			<html>
			<head>
			<title>Form Results</title>
			</head>
			<body>
			<h1> Your form results</h1>
			<p>${body}</p>
			</body>
			</html>`);
		});
	}
// port 8080	
}).listen(process.env.PORT,process.env.IP);

console.log("Server listening on port 8080");