var gulp       = require('gulp');
var gulpSourcempas =require('gulp-sourcemaps');
var gulpSass   = require('gulp-compass');
var gulpJslint   = require('gulp-jslint');
var gulpUglify = require('gulp-uglify');
var gulpCat    = require('gulp-concat');
var gulpRename = require('gulp-rename');
var gulpCss    = require('gulp-clean-css');
var livereload = require('gulp-livereload');
gulp.task('sass',function(){
	return gulp.src('source/scss/style.scss')
	       .pipe(gulpSass({
	       	 css: 'build/development/css',
	       	 sass: 'source/scss',
	       	 style: 'expanded',
	       	 sourcemap: 'true'
	       }))
	       .pipe(gulpCss())
	       .pipe(gulpRename('style.min.css'))
	       .pipe(gulp.dest('build/development/css'))
	       .pipe(livereload());
});

gulp.task('jsLint',function(){
	return gulp.src('source/js/**.js')
	    .pipe(gulpJslint())
	    .pipe(gulpJslint.reporter('default'));
});

gulp.task('js',function(){
	return gulp.src('source/js/**.js')
	   .pipe(gulpSourcempas.init())
	   .pipe(gulpCat('main.js'))
	   .pipe(gulpUglify())
	   .pipe(gulpSourcempas.write('../maps'))
	   .pipe(gulp.dest('build/development/js'));
});

gulp.task('watch',function(){
	 livereload.listen();
	 gulp.watch(['source/scss/**.scss'],['sass']);
	 gulp.watch(['source/js/**.js'],['jsLint','js']);
});
gulp.task('default',['sass','jsLint','js','watch']);

