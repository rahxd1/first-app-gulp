var gulp = require('gulp');

var uglify = require('gulp-uglify');

var sass = require('gulp-ruby-sass');

//var plumber = require('gulp-plumber');

function errorlog(error){
	console.error.bind(error);
	this.emit('end');
}

// Tasks

gulp.task('scripts', function(){
	gulp.src('js/*.js')
		//.pipe(plumber())
		.pipe(uglify())
		.on('error', errorlog)
		.pipe(gulp.dest('minjs'));	
})

gulp.task('styles', function(){
	gulp.src('scss/**/*.scss')
		//.pipe(plumber())
		.pipe(sass({
			sytle: 'compressed'}
		))
		.on('error', errorlog)
		.pipe(gulp.dest('mincss/'));	
})

gulp.task('watch', function(){
	gulp.watch('js/*.js', ['scripts'])
	gulp.watch('scss/**/*.scss', ['styles'])
});

gulp.task('default', ['scripts', 'watch']);