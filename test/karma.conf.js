'use strict';

module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'dist/app.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine', 'browserify'],

    browsers : ['Chrome'],

    plugins : [
      'karma-bro',
      'karma-chrome-launcher',
      'karma-jasmine'
    ],

    browserify: {
      debug: true,
      watch: true,
      transform: [ 'es6ify' ]
    },

    preprocessors: {'test/unit/**/*.js': ['browserify']},

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  });
};
