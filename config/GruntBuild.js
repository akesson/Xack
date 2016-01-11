'use strict';

module.exports.tasks = {

    clean: ["build"],
    copy: {
        dev: {
            expand: true,
            cwd: '<%= paths.srcRoot %>',
            src: "**",
            dest: '<%= paths.devRoot %>'
        },
        lib: {
            expand: true,
            flatten: true,
            cwd: '<%= paths.libRoot %>',
            src: [
                'mithril/mithril.js',
                'pure-release-0.6.0/pure.css',
                'pure-release-0.6.0/base.css'
            ],
            dest: '<%= paths.devRoot %><%= paths.libRoot %>'
        }
    }
};
