var gulp = require('gulp');

var uglify = require('gulp-uglify');

// Tasks

gulp.task('scripts', function(){
	gulp.src('js/*.js').pipe(uglify()).pipe(gulp.dest('minjs'));	
})

gulp.task('watch', function(){
	gulp.watch('js/*.js', ['scripts'])
});

gulp.task('default', ['scripts', 'watch']);