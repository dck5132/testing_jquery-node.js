var express = require("express");
var cors = require("cors");
var parser = require("body-parser");

var app = express();

var skierTerms =[
	{
		term: "Rip",
		defined: "To move at high rate of speed"
	},
	{
		term: "Huck",
		defined: "To throw your body off of something, usually a natural feature like a cliff"
	},
	{
		term: "Chowder",
		defined: "Powder after it has been sufficiently skied"
	}
];

app.use(parser.json());
app.use(parser.urlencoded({extended: false}));

app.use(function(req,res,next){
	console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
	next();
});

app.use(express.static("./lib/clientside"));

app.use(cors());

app.get("/dictionary-api", function(req,res) {
	res.json(skierTerms);
});

app.post("/dictionary-api", function(req,res) {
	skierTerms.push(req.body);
	res.json(skierTerms);
});

app.delete("/dictionary-api/:term", function(req,res){
	skierTerms = skierTerms.filter(function(definition) {
		return definition.term.toLowerCase() !== req.params.term.toLowerCase();
	});
	res.json(skierTerms);
});
app.listen(8080);

console.log("Express server listening on port 8080");

module.exports = app;