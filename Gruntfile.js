// Generated on 2014-08-01 using generator-angular 0.9.5
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

      bower : {
          install: {
              options: {
                  verbose: true,
                  //cleanup: true,
              }
          },
          clean: {
              options: {
                  verbose: true,
                  cleanup: true,
              }}
      },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
        /* Disable wiredep automation
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },  */

        templates: {
            files: ['<%= yeoman.app %>/views/{,*/}*.html'],
            tasks: ['ngtemplates']
        },
      js: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },

        less: {
            files: ['<%= yeoman.app %>/styles/{,*/}*.less'],
            tasks: ['less']
        },

      jsTest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'karma']
      },
        karma: {
            files: ['<%= yeoman.app %>/scripts/{,*/}*.js', 'test/spec/**/*.js'],
            tasks: ['karma:unit:run'] //NOTE the :run flag
        },
      styles: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
        tasks: ['newer:copy:styles', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },


      ngtemplates: {
          'mosaicsControllers': {
              cwd: '<%= yeoman.app %>/',
              src: 'views/*.html',
              dest: '<%= yeoman.app %>/templates/mosaics.ui.tpls.js',
              options: {

              }
          }
      },

      header: {
          templates: {
              options: {
                  text: '/* DO NOT EDIT - generated by Grunt from HTML templates */\n\n'
              },
              files: {
                  '<%= yeoman.app %>/templates/mosaics.ui.tpls.js': '<%= yeoman.app %>/templates/mosaics.ui.tpls.js'
              }
          }
      },

      less: {
          development: {
              files: {
                  '<%= yeoman.app %>/styles/main.css': '<%= yeoman.app %>/styles/main.less'
              }
          }
      },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9010,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35739
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              require('grunt-connect-proxy/lib/utils').proxyRequest,
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= yeoman.dist %>'
        }
      },
          proxies: [
              {
                  context: '/api',
                  host: 'localhost',
                  port: 8080,
                  //host: 'mosaics-test.herokuapp.com',
                  //port: 80,
                  changeOrigin: true,
                  https: false,
                  xforward: false
              },
              {
                  context: '/proxy',
                  host: 'localhost',
                  port: 8081,
                  https: false,
                  xforward: false
              }
          ]
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/scripts/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      options: {
        cwd: '<%= yeoman.app %>'
      },
      app: {
        src: ['<%= yeoman.app %>/index.html'],
        ignorePath:  /\.\.\//
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= yeoman.dist %>/scripts/{,*/}*.js',
          '<%= yeoman.dist %>/styles/{,*/}*.css',
          '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= yeoman.dist %>/styles/fonts/*'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat' /*'uglifyjs' */],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= yeoman.dist %>','<%= yeoman.dist %>/images']
      }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    // uglify: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/scripts/scripts.js': [
    //         '<%= yeoman.dist %>/scripts/scripts.js'
    //       ]
    //     }
    //   }
    // },
    // concat: {
    //   dist: {}
    // },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html', 'views/{,*/}*.html', 'snippets/{,*/}*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    // ngmin tries to make the code safe for minification automatically by
    // using the Angular long form for dependency injection. It doesn't work on
    // things like resolve or inject so those have to be done manually.
    ngmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            'views/{,*/}*.html',
            'samples/{,*/}*.*',
            'styles/webfonts/{,*/}*.*',
            'snippets/{,*/}*.html',
            'images/{,*/}*.{webp}',
            'fonts/*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/images',
          src: ['generated/*']
        }, {
          expand: true,
          cwd: 'bower_components/bootstrap/dist',
          src: 'fonts/*',
          dest: '<%= yeoman.dist %>'
        },
        /* copy pdf worker as is for explicit inclusion (see app.js) */
        {
            expand: true,
            cwd: '.tmp',
            src: '**',
            dest: '<%= yeoman.dist %>'
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      },
        /* copy pdf lib as is for explicit inclusion (some resources are introspected based on lib path) */
      mintlibs: {
            expand: true,
            cwd: 'bower_components',
            src: ['pdfjs-dist/**', 'openlayers2/**'],
            dest: '.tmp/libs'
      },
        fragviz_include: {
            expand: true,
            cwd: 'bower_components/fragmentsviz/app',
            src: ['styles/include.css', 'scripts/extlibs/sausage/sausage.css'],
            dest: '.tmp/libs/fragviz_include'
        },
        mosaics_webfonts: {
            expand: true,
            cwd: 'bower_components/ng-mosaics/app/styles',
            src: ['webfonts/**'],
            dest: '.tmp/styles'
        },
        mosaics_images: {
            expand: true,
            cwd: 'bower_components/ng-mosaics/app/images',
            src: ['**'],
            dest: '.tmp/images'
        }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'copy:styles',
        'copy:mintlibs',
        'copy:fragviz_include',
        'copy:mosaics_webfonts',
          'copy:mosaics_images'
      ],
      test: [
        'copy:styles',
        'copy:mintlibs',
        'copy:fragviz_include',
          'copy:mosaics_webfonts',
          'copy:mosaics_images'
      ],
      dist: [
        'copy:styles',
        'copy:mintlibs',
        'copy:fragviz_include',
          'copy:mosaics_webfonts',
          'copy:mosaics_images',
        'imagemin',
        'svgmin'
      ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: false,
        background:true
      }
    }
  });


  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

      if (target === 'test') {
          grunt.task.run(['karma:unit:start']);
      }

    grunt.task.run([
      'clean:server',
      /* 'wiredep', Disable wiredep automation because script injection is customized */
      'configureProxies:server',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });


  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
      'bower:install',
      'ngtemplates',
      'header',
    /* 'wiredep', Disable wiredep automation because script injection is customized */
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    //'ngmin',
    'copy:dist',
    'cdnify',
      'less',
    'cssmin',
    //'uglify',
    'filerev',
    'usemin',
    //'htmlmin'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};
