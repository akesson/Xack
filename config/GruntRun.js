'use strict';

module.exports.tasks = {
    connect: {
        dev: { options: { base: '<%= paths.web %>', livereload: true } }
    },
    watch: {
        buildConfig: {
            files: ['Gruntfile.js', 'config/*'],
            tasks: ['devbuild']
        },
        dev: {
            files: ['<%= paths.source %>**'],
            tasks: ['devbuild']
        },
        options: {
            spawn: false,
            livereload: 35729
        }
    }
};
