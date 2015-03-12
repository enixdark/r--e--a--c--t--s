
var gulp = require('gulp'),
	webserver = require('gulp-webserver'),
	inject = require('gulp-inject'),
	del = require('del'),
	bowerMainFiles = require('main-bower-files');

var _ = require('underscore');

var paths = {
	app:'app',
	index:'app/index.html',
	build:'build',
	buildStyle:'stylesheets',
	buildSCript:'javascripts',
	buildIndex:'build/index.html',
	appScript:['app/**/*.js','!main.js'],
	appTemplate:['app/**/*.html','!app/index.html'],
	srcStatic:'build/static'
}

gulp.task('default',['watch']);


gulp.task('watch',['serve'],function(){
	gulp.watch(paths.buildSCript,['scripts']);
	gulp.watch(paths.buildStyle,['style']);
	gulp.watch(paths.index,['copyAll']);
})

gulp.task('serve',['copyAll'],function(){
	gulp.src(paths.build).pipe(webserver({
		livereload:true
	}));
});


gulp.task('html.copy', function () {
	return gulp.src(paths.appTemplate).pipe(gulp.dest(paths.build));
})

gulp.task('mainscripts.copy', function () {
	return gulp.src(paths.appScript).pipe(gulp.dest(paths.srcStatic));
})


gulp.task('style.copy',function(){
	var css = _.filter(bowerMainFiles(),function(i){
		return i.match(/.css$/);
	});
	gulp.src(css).pipe(gulp.dest(paths.srcStatic+"/"+paths.buildStyle));
});

gulp.task('scripts.copy',function(){
	var js = _.filter(bowerMainFiles(),function(i){
		return i.match(/.js$/);
	});
	gulp.src(js).pipe(gulp.dest(paths.srcStatic+"/"+paths.buildSCript));
});


gulp.task('scripts', ['scripts.copy'], function () {

	var appScriptFiles = gulp.src([bowerScript], {
		read: false
	});

	return gulp.src(appScriptFiles)
		.pipe(gulp.dest(paths.static));
});

gulp.task('copyAll', ['scripts.copy','style.copy','mainscripts.copy','html.copy'], function () {
	var js = gulp.src([paths.srcStatic + '/javascripts/*',paths.srcStatic+'/stylesheets/*'], {
		read: false
	});

	var appFiles = gulp.src(['build/*.js'], {
		read: false
	});

	return gulp.src(paths.index)
		.pipe(gulp.dest(paths.build))
		.pipe(inject(js, {
			relative: true,
			name: 'resourceInject'
		}))
		.pipe(inject(appFiles, {
			relative: true,
		}))
		.pipe(gulp.dest(paths.build));

});
