/*global -$ */
'use strict';
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sass = require('gulp-sass');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');
var del = require('del');

var paths = {
  dist: 'dist/',
  html: ['app/index.html'],
  scripts: ['app/scripts/**/*.js']
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

gulp.task('clean:dist', function () {
  return del([
    'dist/**/*'
  ]);
});

gulp.task('usemin', function() {
  return gulp.src('app/*.html')
    .pipe(usemin({
      css: [minifyCss(), rev() ],
      html: [ minifyHtml({ empty: true }) ],
      js: [ uglify(), rev() ],
      app: [uglify(), rev()]
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('dist',['clean:dist','styles', 'usemin'], function() {
});

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
