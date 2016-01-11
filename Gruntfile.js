'use strict';

module.exports = function (grunt) {

    pkg: grunt.file.readJSON('package.json');

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);


    var options = {
        // Project settings
        paths: {
            // Configurable paths
            devRoot: 'build/dev/',
            srcRoot: 'client/src/',
            libRoot: 'libs/'
        }
    };

    // Load grunt configurations automatically
    var configs = require('load-grunt-configs')(grunt, options);

    // Define the configuration for all the tasks
    grunt.initConfig(configs);

    grunt.registerTask('devbuild', ['clean', 'copy:dev', 'copy:lib']);
    grunt.registerTask('default', ['devbuild', 'connect:dev', 'watch:dev']);
};
