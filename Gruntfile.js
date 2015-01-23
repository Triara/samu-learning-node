'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        mochacli: {
            options: {
                ui: 'bdd',
                files: ['tests/*.js'],
                harmony: true
            },
            dev: {
                options: {
                    reporter: 'spec'
                }
            }
        }
    });

    grunt.registerTask('test', [
        'mochacli'
    ]);
};
