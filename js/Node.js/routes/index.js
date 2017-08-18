exports.index = function (req, res) {
	//res.send("<h1>Hello</h1> Express");
	res.render("default", {
	title: "Home",
	classname: "home",
	users: ["Cyril", "Millay", "Snowe"]
	 });
}

exports.about = function (req, res) {
	//res.send("<h1>Hello</h1> Express");
	res.render("default", {
	title: "About",
	classname: "about",
	 });
}

exports.me = function (req, res) {
	res.send("<b>Cyril Shadow</b>");
}


exports.name =  function (req, res) {
	var name = req.params.name;
	res.send(`${name} was here`);
}

exports.title =  function (req, res) {
	var name = req.params.name;
	var title = req.params.title;
	res.send(`<p>${name} <br> ${title}</p>`);
}

exports.error =  function (req, res) {
	res.status(404).send("Bad Route");
}