module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webdriver: {
      test: {
        configFile: './test/wdio.conf.js'
      }
    }
  })

  grunt.loadNpmTasks('grunt-webdriver');

  grunt.registerTask('default', ['webdriver']);
};

// module.exports = function(grunt){
//   grunt.initConfig({
//     pkg: grunt.file.readJSON('package.json'),
//     jshint: {
//       all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js', 'server.js']
//     },
//     watch: {
//       files: ['Gruntfile.js', 'test/**/*.js', 'server.js'],
//       tasks: ['jshint', 'webdriver']
//     },
//     webdriver: {
//       test: {
//         configFile: './test/wdio.conf.js'
//       }
//     },
//   });

//   grunt.loadNpmTasks('grunt-contrib-jshint');
//   grunt.loadNpmTasks('grunt-contrib-watch');
//   grunt.loadNpmTasks('grunt-webdriver');

//   grunt.registerTask('default', ['jshint', 'webdriver']);

// };
