var gulp       = require('gulp');
var gulpSass   = require('gulp-compass');
var gulpJslint   = require('gulp-jslint');
var gulpUglify = require('gulp-uglify');
var gulpCat    = require('gulp-concat');
var gulpRename = require('gulp-rename');
var gulpCss    = require('gulp-clean-css');
gulp.task('sass',function(){
	return gulp.src('source/scss/style.scss')
	       .pipe(gulpSass({
	       	 css: 'build/development/css',
	       	 sass: 'source/scss',
	       	 style: 'expanded'
	       }))
	       .pipe(gulpCss())
	       .pipe(gulpRename('style.min.css'))
	       .pipe(gulp.dest('build/development/css'))
});

gulp.task('jsLint',function(){
	return gulp.src('source/js/**.js')
	    .pipe(gulpJslint())
	    .pipe(gulpJslint.reporter('default'))
});

gulp.task('js',function(){
	return gulp.src('source/js/**.js')
	   .pipe(gulpCat('main.js'))
	   .pipe(gulpUglify())
	   .pipe(gulp.dest('build/development/js'))
});

gulp.task('watch',function(){
	 gulp.watch(['source/style/**.scss'],['sass']);
	 gulp.watch(['source/js/**.js'],['jsLint','js']);
});
gulp.task('default',['watch']);

