'use strict';

module.exports.tasks = {

    clean: {
        all: ["build"],
        css: ['<%= paths.web %>*.css', '<%= paths.generated %>/css'],
        html: ['<%= paths.web %>*.html'],
        js: ['<%= paths.web %>**.js'],
        libs: ['<%= paths.web %><%= paths.libs %>']
    },
    copy: {
        js: {
            expand: true,
            cwd: '<%= paths.source %>',
            src: ['**.js'],
            dest: '<%= paths.web %>'
        },
        html: {
            expand: true,
            cwd: '<%= paths.source %>',
            src: ['**.html'],
            dest: '<%= paths.web %>'
        },
        libs: {
            expand: true,
            flatten: true,
            cwd: '<%= paths.libs %>',
            src: [
                'mithril/mithril.js',
                'pure-release-0.6.0/pure.css',
                'pure-release-0.6.0/base.css'
            ],
            dest: '<%= paths.web %><%= paths.libs %>'
        },
        sass: {
            expand: true,
            cwd: '<%= paths.generated %>/css',
            src: 'client.css',
            dest: '<%= paths.web %>'
        }
    },
    sass: {
        dev: {
            files: [{
                expand: true,
                cwd: '<%= paths.source %>',
                src: ['*.scss'],
                dest: '<%= paths.generated %>/css',
                ext: '.css'
            }]
        }
    }
};
