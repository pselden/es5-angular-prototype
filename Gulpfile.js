var gulp = require('gulp');

var browserify = require('browserify');
var watchify = require('watchify');

var changed = require('gulp-changed');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify'); // required for uglify because it has no streaming mode
var es6ify = require('es6ify');
es6ify.traceurOverrides = { blockBinding: true }; // allow "let"

// gulp helpers
var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var size = require('gulp-size');
var source = require('vinyl-source-stream');

var staticFiles = ['./eventshopper/**/*.html', './eventshopper/**/*.css'];

function bundle(shouldWatch, options){
    watchify.args.debug = true; // note: this generates an inline sourcemap -- not a sourcemap file
    var bundler = browserify(es6ify.runtime, watchify.args)
        .transform(es6ify)
        .add('./eventshopper/app.js');

    if(shouldWatch){
        bundler = watchify(bundler);

        gulp.watch(staticFiles, ['copy']);

        bundler.on('update', rebundle);
    }

    function rebundle() {
        return bundler
            .bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source('app.js'))
            .pipe(gulpif(options.minify, streamify(uglify())))
	        .pipe(streamify(size()))
            .pipe(gulp.dest('dist'));
    }

    return rebundle();
}

gulp.task('copy', function(){
    return gulp.src(staticFiles, { base: './eventshopper/' })
        .pipe(changed('dist'))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    return bundle(true, { minify: false });
});

gulp.task('bundle', function(){
    return bundle(false, { minify: true });
});

gulp.task('default', ['copy', 'watch']);
gulp.task('build', ['copy', 'bundle'])
