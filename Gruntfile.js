module.exports = function(grunt) {
  // Auto-require all grunt dependencies
  require('matchdep')
    .filterAll(['grunt-*', 'gruntify-*'])
    .forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    browserSync: { // Documentation server
      dev: {
        bsFiles: {
          src : ['docs/**/*.css', 'docs/**/*.html']
        },
        options: {
          server: {
            baseDir: "./docs"
          },
          notify: false,
          open: false,
          watchTask: true
        }
      }
    },
    copy: {
      fonts: {
        // TODO(sawyer) Figure out a better way of managing these font files,
        // since it seems unecessary to have the same files in src/ and dist/
        files: [
          {
            expand: true,
            cwd: 'src',
            src: 'fonts/*',
            dest: 'dist/',
            filter: 'isFile'
          }
        ]
      },
      docs: {
        // Copy the compiled files into the docs site so they can be
        // referenced using relative URLs
        files: [
          {
            expand: true,
            cwd: 'dist',
            src: ['fonts/*', 'styles/all.css'],
            dest: 'docs/dist/',
            filter: 'isFile'
          }
        ]
      }
    },
    eslint: { // Lint JavaScript
      src: {
        files: [{
          expand: true,
          cwd: 'src/scripts',
          src: ['**/*.js', '**/*.jsx']
        }]
      }
    },
    kss: { // Documentation generation
      options: {
        css: '/dist/styles/all.css'
      },
      dist: {
        src: ['src/styles/'],
        dest: 'docs'
      }
    },
    postcss: { // Transform CSS
      options: {
        processors: [
          require('postcss-import')(), // inline imports
          require('postcss-cssnext')(), // future spec -> current spec (includes autoprefixer)
          require('cssnano')() // minify the result
        ]
      },
      styles: {
        files: [
          {
            expand: true,
            cwd: 'src/styles/',
            src: ['**/*.css'],
            dest: 'dist/styles',
            ext: '.css',
            filter: dest => !dest.match(/\/utils\//)
          }
        ],
      }
    },
    stylelint: { // Lint CSS
      src: ['src/styles/**/*.css'],
      options: {
        reportNeedlessDisables: true
      }
    },
    watch: { // Run corresponding tasks when certain files change
      docs: {
        files: ['dist/styles/**/*.css'],
        tasks: ['build:docs'],
      },
      scripts: {
        files: ['src/scripts/**/*.js', 'src/scripts/**/*.jsx'],
        tasks: ['eslint'],
      },
      styles: {
        files: ['src/styles/**/*.css'],
        tasks: ['build:css'],
      }
    },
  });

  // Grouped tasks
  grunt.registerTask('lint', ['eslint']);
  grunt.registerTask('build:css', ['postcss']);
  grunt.registerTask('build:docs', ['copy:docs', 'kss']);

  // Executable tasks
  grunt.registerTask('default', ['browserSync', 'watch']);
  grunt.registerTask('build', ['lint', 'copy:fonts', 'build:css', 'build:docs']);
};