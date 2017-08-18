module.exports = function(grunt) { 
	grunt.initConfig({
		jshint: {
			files: ["*.js", "lib/*.js","test/*.js"],
			options: {
				esnext: true,
				globals: {
					jQuery: true
				}
			},
			ignores: ["directory.js", "bluebird-demo.js","ask.js", "app.js", "test/tool-spec.js"]
		},
		less: {
			production: {
				files: {
					"lib/clientside/css/style.css": ["lib/less/*.less"]
				}
			}
		},
		autoprefixer: {
			single_file: {
				src: "lib/clientside/css/style.css",
				dest: "lib/clientside/css/style.css"
			}
		},
		browserify: {
			client: {
				src: ["skier-client.js"],
				dest: "lib/clientside/js/bundle.js"
			}
		},
		watch: {
			css: {
				files: ["lib/less/*.less"],
				tasks: ["css"]
			},
			scripts: {
				files: ["skier-client.js","lib/print-terms.js"],
				tasks: ["jshint", "browserify"]
			}
		}
	});
	
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-autoprefixer");
	grunt.loadNpmTasks("grunt-browserify");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.registerTask("css", ["less", "autoprefixer"]);
	grunt.registerTask("js", ["browserify"]);
	grunt.registerTask("default", ["jshint", "css", "js"]);
};