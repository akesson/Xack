'use strict';

module.exports.tasks = {
    connect: {
        dev: { options: { base: '<%= paths.devRoot %>', livereload: true } }
    },
    watch: {
        buildConfig: {
            files: ['Gruntfile.js', 'config/*'],
            tasks: ['default']
        },
        dev: {
            files: ['<%= paths.srcRoot %>**'],
            tasks: ['devbuild']
        },
        options: {
            spawn: false,
            livereload: 35729
        }
    }
};
