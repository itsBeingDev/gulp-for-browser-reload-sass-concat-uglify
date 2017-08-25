var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var browserSync = require('browser-sync');


gulp.task('first', function(){
     return gulp.src('./app/js/**/*.js')
    .pipe(concat('min.js'))
    .pipe(uglify( {
	      mangle: false,
	      output: {
	        beautify: true
	      }
	    }
    ))
    .pipe(rename('uglify.js'))
    .pipe(gulp.dest('./prodapp/js/'));
});

gulp.task('sass', function () {
  return gulp.src('./app/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix(['last 15 versions'], { cascade: true }))
    .pipe(gulp.dest('./prodapp/css/'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('default', ['first'], function (done) {
    console.log('done');
});

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./prodapp"
    });

    gulp.watch("app/sass/*.sass", ['sass']);
    gulp.watch("prodapp/**/*.*").on('change', browserSync.reload);
});

