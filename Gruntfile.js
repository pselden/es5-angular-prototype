module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      js: {
        // A single entry point for our app
        src: 'eventshopper/app.js',
        // Compile to a single file to add a script tag for in your HTML
        dest: 'dist/app.js'
      }

    },
    watchify: {
      js: {
        // A single entry point for our app
        src: './eventshopper/app.js',
        // Compile to a single file to add a script tag for in your HTML
        dest: 'dist/app.js'
      }
    },
    watch: {
      app: {
        files: 'dist/app.js'
      }
    },
    copy: {
      all: {
        // This copies all the html and css into the dist/ folder
        expand: true,
        cwd: 'eventshopper/',
        src: ['**/*.html', '**/*.css'],
        dest: 'dist/'
      },
    },
  });

  // Load the npm installed tasks
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-watchify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // The default tasks to run when you type: grunt
  grunt.registerTask('default', ['browserify', 'copy']);

};
