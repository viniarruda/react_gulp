var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');


gulp.task('sass', function() {
	return gulp.src('./app/src/sass/**/*.scss')
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(gulp.dest('./app/src/css'))
});

gulp.task('watch', function() {
	gulp.watch('./app/src/sass/**/*.scss', ['sass'])
});

gulp.task('default', ['sass', 'watch']);