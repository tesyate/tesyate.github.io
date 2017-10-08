module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
	  options: {
	    // define a string to put between each file in the concatenated output
	    separator: ';'
	  },
	  dist: {
	    // the files to concatenate
	    src: ['js/*.js'],
	    // the location of the resulting JS file
	    dest: 'dist/javascript.main.js'
	  }
	},
	concat: {
	  /*options: {
	    // define a string to put between each file in the concatenated output
	  	separator: ','
	  },*/
	  dist: {
	    // the files to concatenate
	    src: ['css/*.css'],
	    // the location of the resulting JS file
	    dest: 'dist/style.main.css'
	  }
	},
	cssmin: {
	  options: {
	    mergeIntoShorthands: false,
	    roundingPrecision: -1
	  },
	  target: {
	    files: {
	      'dist/style.min.css': ['dist/style.main.css']
	    }
	  }
	},
	uglify: {
	  dist: {
	    src: ['dist/javascript.main.js'],
	    dest: 'dist/javascript.main.min.js'
	  }
	}
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};