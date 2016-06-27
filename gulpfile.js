/*global -$ */
'use strict';
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sass = require('gulp-sass');

var paths = {
  dist: 'dist/'
}

gulp.task('jshint', function() {
  return gulp.src('app/scripts/**/*.js')
    .pipe(reload({
      stream: true,
      once: true
    }))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});

gulp.task('styles', function(){
  return gulp.src('app/styles/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/styles'))
});

// gulp.tast('dist', function() {
  

// });


gulp.task('serve', ['jshint','styles'], function () {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['app'],
      routes: {
        '/node_modules': 'node_modules'
      }
    }
  });

  // watch for changes
  gulp.watch([
    'app/*.html',
    'app/views/**/*.html',
    'app/scripts/**/*.js',
    'app/styles/**/*.scss'
  ]).on('change', reload);

  gulp.watch('app/styles/**/*.scss', ['styles']);
});

gulp.task('default', function() {
  gulp.start('serve');
});
