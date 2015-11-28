var gulp = require('gulp');

var uglify = require('gulp-uglify');

var sass = require('gulp-ruby-sass');

var livereolad = require('gulp-livereload');

var imagemin = require('gulp-imagemin');

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
		.pipe(gulp.dest('mincss/'))
		.pipe(livereolad());	
})

gulp.task('image', function(){
	gulp.src('img/*')
		.pipe(imagemin())
		//.pipe(gulp.dest('build/img/'));
		.pipe(gulp.dest('img/')); // Comprimir las imagenes en la misma carpeta	
})

gulp.task('watch', function(){
	var server =livereolad();
	gulp.watch('js/*.js', ['scripts'])
	gulp.watch('scss/**/*.scss', ['styles'])
});

gulp.task('default', ['scripts', 'watch']);