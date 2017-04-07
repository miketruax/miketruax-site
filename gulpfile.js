"use strict";

var gulp = require('gulp'),
 watch = require('gulp-watch'),
 del = require('del'),
 sass = require('gulp-sass'),
 maps = require('gulp-sourcemaps');

    gulp.task('scss', ['clean'], function(){
      return gulp.src('src/styles/app.style.scss')
        .pipe(maps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(maps.write('./'))
        .pipe(gulp.dest('dist/assets/styles/'));

    });
    gulp.task('clean', function () {
      return del(['dist/assets/styles/**.*']);
    });

    gulp.task("fresh",['scss'], function(){
      return watch('src/styles/app.styles.scss', { ignoreInitial: false })
        .pipe(gulp.dest('scss'));
    });





gulp.task("default", ["fresh"]);
