var http = require("http");

var data = require("./lib/data/inventory");

http.createServer(function(req,res) {
	
	if(req.url === "/")
	{
		res.writeHead(200,{"Content-Type": "text/json"});
		res.end(JSON.stringify(data));
	}
	else if(req.url === "/instock"){
		listInStock(res);
	}
	else if(req.url === "/onbackorder"){
		listOnBackOrder(res);
	}
	else{
		res.writeHead(404, {"Content-Type" : "text/plain"});
		res.end(" File not found");
	}
	
}).listen(8080);

console.log("Server listening on port 8080");

function listInStock (res) {
	var inStock = data.filter(function(item){
		return item.avail === "In stock";
	});
	res.end(JSON.stringify(inStock));
}

function listOnBackOrder (res) {
	var onBackOrder = data.filter(function(item){
		return item.avail === "On back order";
	});
	res.end(JSON.stringify(onBackOrder));
}