// array to store questions
var questions = [
	"What is your favorite food?",
	"What is your name?",
	"How many pets do you have?"
];
// array to store input answers
var answers = [];
// asks questions stored in array 
function ask(i)
{
	process.stdout.write(`\n\n\n\n\n\n  ${questions[i]}`);
	process.stdout.write(" > ");
}
// listens for replies and pushes them to answer array
process.stdin.on("data", function (data) {
	answers.push(data.toString().trim());
	// Cuases jshint errors if uncommented
	//(answers.length < questions.length) ? ask(answers.length) : process.exit();
	if(answers.length < questions.length){
		ask(answers.length);
	}
	else{
		process.exit();
	}
	// outputs your input
	//process.stdout.write("\n" + data.toString().trim() + "\n");
});
//output to console
//process.stdout.write("Hello");
//process.stdout.write("World \n\n\n\n\n\n\n");
// returns the answers in one output statement
process.on("exit", function() {
	process.stdout.write("\n\n\n\n\n\n\n");
	
	process.stdout.write(`Go eat ${answers[0]} ${answers[1]}, you can bring your ${answers[2]} pets with you`);
	
	process.stdout.write("\n\n\n\n\n\n\n");
});
// asks the first question
ask(0);