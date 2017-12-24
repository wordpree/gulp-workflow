var gulp =require('gulp');
var gulpSass =require('gulp-compass');
var gulpUglify =require('gulp-uglify');
var gulpCat =require('gulp-concat');

gulp.task('sass',function(){
	return gulp.src('build/style.scss')
	       .pipe(gulpSass({outputStyle:'expanded'}).on('error',gulpSass.logError))
	       .pipe(sourcemaps.init())
	       .pipe(sourcemaps.write())
	       .pipe(gulp.dest('development/'))
});
gulp.task('watch',function(){
	 gulp.watch('build/*.scss',['sass']);
});
gulp.task('default',['watch']);

