module.exports = function(grunt) {

  grunt.initConfig({
  	jasmine: {
	    pivotal: {
	      src: 'js/*.js',
	      options: {
	        specs: 'spec/test.js'
	      }
	    }
	  }
	  /*sass: {
	    dist: {
	      files: [{
	        expand: true,
	        cwd: 'css',
	        src: ['*.scss'],
	        dest: './css',
	        ext: '.css'
	      }]
	    }
	  },
	  watch: {
	    sass: {
	      // We watch and compile sass files as normal but don't live reload here
	      files: ['css/*.scss'],
	      tasks: ['sass'],
	    }
	  }*/
	});

grunt.loadNpmTasks('grunt-contrib-jasmine');
/*grunt.loadNpmTasks('grunt-contrib-watch');*/

grunt.registerTask('default', ['jasmine'/*, 'watch'*/]);

};