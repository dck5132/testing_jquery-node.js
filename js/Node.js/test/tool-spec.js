var expect = require("chai").expect;
var tools = require("../lib/tools");
var nock = require("nock");

describe("Tools", function() {
	describe("printName()", function(){
		it("should print the last name first", function() {
			var results = tools.printName({first: "Cyril", last: "Kalikin"});
			expect(results).to.equal("Kalikin, Cyril");
		});	
	});
	
	describe("loadWiki()", function() {
		this.timeout(5000);
		before(function() {
			nock("https://en.wikipedia.org")
			.get("/wiki/Suikoden_IV")
			.reply(200, "Mock Suikoden IV page");
		});
		it("Load Suikoden IV's wikapedia page", function(done) {
			tools.loadWiki({first: "Suikoden", last: "IV"}, function(html) {
				expect(200);
				done();
			});
		});
	});
	
});
