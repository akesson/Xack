
var LIVERELOAD_PORT = 35729;
var DEVROOT = 'build/dev/';
var SRCROOT = 'client/src/';
var LIBROOT = 'libs/';

module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ["build"],
        copy: {
            dev: {
                expand: true,
                cwd: SRCROOT,
                src: "**",
                dest: DEVROOT
            },
            lib: {
                expand: true,
                flatten: true,
                cwd: LIBROOT,
                src: ['mithril/mithril.js'],
                dest: DEVROOT
            }
        },
        connect: {
          dev: { options: { base: DEVROOT, livereload: true } }
        },
        watch: {
            dev: {
                files: [SRCROOT + '**'],
                tasks: ['devbuild'],
                options: {
                    spawn: false,
                    livereload: LIVERELOAD_PORT
                }
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('devbuild', ['clean', 'copy:dev', 'copy:lib']);
    grunt.registerTask('default', ['devbuild', 'connect:dev', 'watch:dev']);
};
