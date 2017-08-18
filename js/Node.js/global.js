// require includes the package and allows it to be used 
var path = require("path");

var hello = "Hello World from Node.js";
// slice is js code that cuts sentence at index # 
var justNode = hello.slice("17");
// global is part of global object in Node, also possible to use without global.
global.console.log(hello);
global.console.log(justNode);
// backticks are ES6 code to replace commas
console.log(`Rock on World from ${path.basename(__filename)}`);
// __dirname returns directory file is located in
console.log(__dirname);
// __filename returns directory and name of file that file is located in
console.log(__filename);