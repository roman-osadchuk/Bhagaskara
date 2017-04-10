module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: [['scripts/bhagas.js'],['scripts/jquery.animateNumber.min.js'],['scripts/remote_scripts.js']],
        dest: 'minified/concatenated.js'
      }
    },
    uglify: {
      dist: {
        files:{
          'minified/main.min.js' : ['minified/concatenated.js']
        }
      }
    },
    jshint: {
      files: ['scripts/bhagas.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['scripts/bhagas.js'],
      tasks: ['jshint']
    }
  });

    
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

};
