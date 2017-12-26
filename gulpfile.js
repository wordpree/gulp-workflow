var gulp       = require('gulp');
var gulpSass   = require('gulp-compass');
var gulpUglify = require('gulp-uglify');
var gulpCat    = require('gulp-concat');
var gulpRename = require('gulp-rename');
var gulpCss    = require('gulp-clean-css');
gulp.task('sass',function(){
	return gulp.src('preprocess/style.scss')
	       .pipe(gulpSass({
	       	 css: 'build/development',
	       	 sass: 'preprocess',
	       	 style: 'expanded'
	       }))
	       .pipe(gulpCss())
	       .pipe(gulpRename('style.min.css'))
	       .pipe(gulp.dest('build/development'))
});

gulp.task('watch',function(){
	 gulp.watch('preprocess/*.scss',['sass']);
});
gulp.task('default',['watch']);

