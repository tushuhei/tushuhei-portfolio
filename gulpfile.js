var autoprefixer = require('gulp-autoprefixer');
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');


var Path = {
  CSS_SOURCE_DIR: './source/sass/',
  CSS_SOURCES: './source/sass/*',
  CSS_OUT_DIR: './dist/css/',
  JS_OUT_DIR: './dist/js/',
  JS_TEMP_DIR: './bower_components/',
  JS_SOURCES: [
    './source/js/**/*.js',
  ]
};


gulp.task('sass', function() {
  return gulp.src('./source/sass/*.scss')
    .pipe(plumber())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest(Path.CSS_OUT_DIR));
});



gulp.task('watch', function() {
  gulp.watch([Path.CSS_SOURCES], ['sass']);
});


gulp.task('build', ['sass']);
gulp.task('default', ['sass', 'watch']);
