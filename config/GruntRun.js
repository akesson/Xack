'use strict';

module.exports.tasks = {
    connect: {
        dev: { options: { base: '<%= paths.web %>', livereload: true } }
    },
    watch: {
        js: {
            files: ['<%= paths.source %>**.ts'],
            tasks: ['buildJS']
        },
        html: {
            files: ['<%= paths.source %>**.html'],
            tasks: ['buildHTML']
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
