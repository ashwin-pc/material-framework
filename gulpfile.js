var gulp = require('gulp');
var concat = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');

// create task
gulp.task('build', function(){
  gulp.src('src/css/**/*.css')
      .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
      .pipe(concat('material.min.css'))
      .pipe(gulp.dest('dist/css'))
  gulp.src('src/fonts/**/*.*')
      .pipe(gulp.dest('dist/fonts'))
});
