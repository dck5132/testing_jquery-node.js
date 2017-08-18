var express = require("express");
var app = express();
var routes = require("./routes");

app.set("view engine", "ejs");
//to make custom folder to pull from
// app.set("views", __dirname + "/foldername");

app.locals.pageTitle = "Testing Page";

app.get("/", routes.index);
app.get("/about", routes.about);
app.get("/me", routes.me);
app.get("/who/:name?", routes.name);
app.get("/who/:name?/:title?", routes.title);
app.get("/*", routes.error);

var server = app.listen(8080, function () {
	console.log("Listening on port 8080");
});