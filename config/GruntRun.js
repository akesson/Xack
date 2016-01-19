'use strict';

module.exports.tasks = {
    connect: {
        dev: { options: { base: '<%= paths.web %>', livereload: true } }
    },
    watch: {
        js: {
            files: ['<%= paths.source %>**.es6'],
            tasks: ['buildJS']
        },
        html: {
            files: ['<%= paths.source %>**.html'],
            tasks: ['buildHTML']
        },
        json: {
            files: ['<%= paths.source %>**.json'],
            tasks: ['buildJSON']
        },
        css: {
            files: ['<%= paths.source %>**.scss'],
            tasks: ['buildCSS']
        },
        libs: {
            files: ['<%= paths.libs %>'],
            tasks: ['buildLIBS']
        },
        options: {
            spawn: false,
            livereload: 35729
        }
    }
};
