var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require("fs");

var realPerson = {
	name: "",
	sayings: []
};

rl.question("What is the name of a real person? ", function (answer) {
	
	realPerson.name = answer;
	// write stream
	var stream = fs.createWriteStream(realPerson.name + ".md");
	stream.write(` ${realPerson.name}\n================================\n\n`);
	//sync file write
	//fs.writeFileSync(realPerson.name + ".md", ` ${realPerson.name}\n================================\n\n`);
	
	rl.setPrompt(`What would ${realPerson.name} say? `);
	rl.prompt();
	
	rl.on("line", function(saying) {
		
		
		
		if (saying.toLowerCase().trim() === "exit") {
			rl.close();
			stream.close();
		} else{
			realPerson.sayings.push(saying.trim());
			// write stream
			stream.write(` * ${saying.trim()} \n`);
			// appending to file
			//fs.appendFile(realPerson.name + ".md", ` * ${saying.trim()} \n`);
			rl.setPrompt(`What else would ${realPerson.name} say? ("exit" to leave) `);
			rl.prompt();
		}		
		
		//console.log(saying.trim());
		
	});
	
	//console.log(answer);
});

rl.on("close", function() {
	console.log("%s would say %j", realPerson.name, realPerson.sayings);
	process.exit();
});