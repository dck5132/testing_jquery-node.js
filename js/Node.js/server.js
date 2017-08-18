var http = require("http");
var fs = require("fs");
var path = require("path");

http.createServer(function(req, res) {
	console.log(`${req.method} request for ${req.url}`);
	if(req.url==="/"){
		fs.readFile("./lib/public/index.html", "UTF-8", function(err, html) {
			res.writeHead(200, {"Content-Type": "text/html"});
			res.end(html);
		});
	}
	else if (req.url.match(/.css$/)){
		var cssPath = path.join(__dirname, "lib", "public", req.url);
		var fileStream = fs.createReadStream(cssPath, "UTF-8");
		
		res.writeHead(200, {"Content-Type": "text/css"});
		fileStream.pipe(res);
	}
	else if (req.url.match(/.jpg$/)){
		var jpgPath = path.join(__dirname, "lib", "public", req.url);
		var jpgStream = fs.createReadStream(jpgPath);
		
		res.writeHead(200, {"Content-Type": "image/jpeg"});
		jpgStream.pipe(res);
	}
	else{
		res.writeHead(404, {"Content-Type": "text/plain"});
		res.end("404 File not found");
	}
}).listen(8080);

console.log("File server running on port 3000");