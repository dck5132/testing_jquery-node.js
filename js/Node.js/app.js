//Can be used with --user name and --greeting greet in cmd/git bash
console.log(process.argv);
// function to grab the flags and place them in argv array
function grab(flag) {
	// gets index and stores in index variable
	var index = process.argv.indexOf(flag);
	// ternary statement (conditinal if/else replacement) that determines what is returned from function
	return (index === -1) ? null : process.argv[index+1];
}
// flags grabbed by function are stored in variables
var greeting = grab("--greeting");
var user = grab("--user");
//ternary (if/else) that determines what is returned on command line. cuases error if uncommented
//(!user || !greeting) ? console.log("You blew it") : console.log(`Welcome ${user},${greeting}`);
if(!user || !greeting) {
	console.log("You blew it");
}
else {
	console.log(`Welcome ${user},${greeting}`);
}
