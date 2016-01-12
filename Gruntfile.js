'use strict';

module.exports = function (grunt) {

    pkg: grunt.file.readJSON('package.json');

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);


    var options = {
        // Project settings
        paths: {
            // Configurable paths
            web:          'build/webroot/',
            webLibs:      'build/webroot/libs/',
            generated:    'build/generated/',
            generatedCSS: 'build/generated/css/',
            generatedJS:  'build/generated/js/',
            source:       'client/src/',
            libs:         'libs/'
        }
    };

    // Load grunt configurations automatically
    var configs = require('load-grunt-configs')(grunt, options);

    // Define the configuration for all the tasks
    grunt.initConfig(configs);

    grunt.registerTask('buildCSS', ['clean:css', 'sass:dev', 'copy:css']);
    grunt.registerTask('buildHTML', ['clean:html', 'copy:html']);
    grunt.registerTask('buildJS', ['clean:js', 'typescript:dev', 'copy:js']);
    grunt.registerTask('buildLIBS', ['clean:libs', 'copy:libs']);

    grunt.registerTask('build', ['clean:all', 'buildCSS', 'buildHTML', 'buildJS', 'buildLIBS']);
    grunt.registerTask('default', ['build', 'connect:dev', 'watch']);
};
