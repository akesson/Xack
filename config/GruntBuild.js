'use strict';

module.exports.tasks = {

    clean: ["build"],
    copy: {
        dev: {
            expand: true,
            cwd: '<%= paths.source %>',
            src: "**",
            dest: '<%= paths.web %>'
        },
        lib: {
            expand: true,
            flatten: true,
            cwd: '<%= paths.libs %>',
            src: [
                'mithril/mithril.js',
                'pure-release-0.6.0/pure.css',
                'pure-release-0.6.0/base.css'
            ],
            dest: '<%= paths.web %><%= paths.libs %>'
        }
    }
};
