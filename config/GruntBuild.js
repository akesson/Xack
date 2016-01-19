'use strict';

module.exports.tasks = {

    clean: {
        all: ["build"],
        css: ['<%= paths.web %>*.css', '<%= paths.generated %>/css'],
        html: ['<%= paths.web %>*.html'],
        json: ['<%= paths.web %>*.json'],
        js: ['<%= paths.web %>**.js', '<%= paths.generated %>/js'],
        libs: ['<%= paths.web %><%= paths.libs %>']
    },
    copy: {
        js: {
            expand: true,
            cwd: '<%= paths.generatedJS %>',
            src: ['**.js'],
            dest: '<%= paths.web %>'
        },
        html: {
            expand: true,
            cwd: '<%= paths.source %>',
            src: ['**.html'],
            dest: '<%= paths.web %>'
        },
        json: {
            expand: true,
            cwd: '<%= paths.source %>',
            src: ['**.json'],
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
            dest: '<%= paths.webLibs %>'
        },
        css: {
            expand: true,
            cwd: '<%= paths.generatedCSS %>',
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
                dest: '<%= paths.generatedCSS %>',
                ext: '.css'
            }]
        }
    },
    browserify: {
        dev: {
            options: {
                transform: [['babelify', {loose: 'all'}]]
            },
            files: {
              '<%= paths.generatedJS %>/client.js': [
                  '<%= paths.source %>/**/*.es6'
              ]
            }
        }
    }
};
