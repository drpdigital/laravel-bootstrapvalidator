module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        filename : 'laravel-bootstrapValidator',

        banner: [
            '/*!',
            ' * <%= pkg.name %> (<%= pkg.homepage %>)',
            ' * <%= pkg.description %>',
            ' *',
            ' * @version     v<%= pkg.version %>, built on <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %>',
            ' * @author      <%= pkg.author.url %>',
            ' * @copyright   (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>',
            ' * @license     <%= pkg.author.license %>',
            ' */\n'
        ].join('\n'),

        // temp for stu local dev
        copy: {
            temp: {
                files: [
                    { cwd: 'dist', src: '*.js', dest: '../../sites/wai/public/js/laravel-bootstrapvalidator', expand: true, flatten: true, filter: 'isFile' }
                ]
            }
        },

        concat: {
            options: {
                separator: ';',
                stripBanners: true,
                banner: '<%= banner %>'
            },
            src: {
                src: ['src/rules/*.js'],
                dest: 'dist/<%= filename %>.js'
            }
        },

        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            build: {
                src: ['dist/<%= filename %>.js'],
                dest: 'dist/<%= filename %>.min.js'
            }
        },

        jshint: {
            all: [
                'src/**/*.js'
            ],
            options: {
                browser: true,
                camelcase: true,
                curly: true,
                eqeqeq: true,
                eqnull: true,
                es3: true,
                expr: true,
                loopfunc: true,
                newcap: true,
                noarg: true,
                onevar: true,
                sub: true,
                undef: true,
                white: true
            }
        },

        watch: {
            source: {
                files: ['src/**'],
                tasks: ['build'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.registerTask('default', 'build');
    grunt.registerTask('build',   ['concat', 'uglify', 'copy']);

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
