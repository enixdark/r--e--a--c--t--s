'use strict';

import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import uglify from 'gulp-uglify';
import gutil from 'gulp-util';
import watchify from 'watchify';
import streamify from 'gulp-streamify';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';
import assign from 'lodash.assign';

var customOpts = {
  entries: ["./src/app.js"],
  debug: true
};

var opts = assign({}, watchify.args, customOpts);
var b = watchify(
	browserify(opts)
);
b.on('update', bundle);
b.on('log', gutil.log); 

function bundle(){
	return b.transform(babelify,{ presets: ["es2015"] })
	.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./')) 
    .pipe(gulp.dest('./build/'));
}

gulp.task('default', bundle);


