var fs = require("fs");

var md = `

Sample Title Text 
====================

Sample Subtitle Text 
--------------------

*point
*point
*point
*point

`;

fs.writeFile("sample.md", md.trim(), function(err) {
	console.log("File Created");
});