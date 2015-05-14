//Gruntfile.js
module.exports = function(grunt) {

	//locate all JS files inside src/js/
	//"src/js/**/*.js"
	grunt.registerTask("hello", function() {
		console.log("hello from grunt");
		grunt.file.write("build/test.txt", "This file is written sync");
	});

	grunt.loadNpmTasks("grunt-autoprefixer");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-concurrent");
	grunt.loadNpmTasks("grunt-nodemon");

	grunt.registerTask("default", ["autoprefixer", "concurrent"]);

	grunt.initConfig({
		concurrent: {
			dev: {
				tasks: ["nodemon", "watch"],
				opeitons: {
					logConcurrentOutput: true
				}
			}
		},
		nodemon: {
			dev: {
				script: "index.js"
			}
		},
		watch: {
			options: {
				livereload: true
			},
			prefix: {
				files: "src/css/**/*.css",
				tasks: ["autoprefixer"]
			},
			templates: {
				files: "**/*.html",
				tasks: ["hello"]
			}
		},
		autoprefixer: {
			dev: {
				expand: true,
				flatten: true,
				src: "src/css/**/*.css",
				dest: "build/css/"
			}
		}
	});
};