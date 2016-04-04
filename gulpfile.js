var gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat');
var del     = require('del');
var minifyHTML = require('gulp-minify-html');
var minifyCSS  = require('gulp-minify-css');

gulp.task('minify', function () {
  /*gulp.src('temperature.js')
  .pipe(uglify())
  .pipe(gulp.dest('minified'));*/
  
  //Archivo html principal
  gulp.src('./index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./minified/'))

  /*gulp.src('./*.css')
   .pipe(minifyCSS({keepBreaks:true}))
   .pipe(gulp.dest('./minified/'))*/
 
  //Javascript de assets/
  gulp.src('assets/js/*.js')
   .pipe(uglify())
   .pipe(gulp.dest('./minified/assets/js/'))
  //CSS de assets/
  gulp.src('assets/css/*.css')
   .pipe(minifyCSS({keepBreaks:true}))
   .pipe(gulp.dest('./minified/assets/css/'))
  
  //Javascript de Vendor
  gulp.src('vendor/*.js')
   .pipe(uglify())
   .pipe(gulp.dest('./minified/vendor/js/'))
  //CSS de Vendor
  gulp.src('vendor/*.css')
   .pipe(minifyCSS({keepBreaks:true}))
   .pipe(gulp.dest('./minified/vendor/css/'))
  //HTML de Vendor
  gulp.src('vendor/*.html')
   .pipe(minifyHTML())
   .pipe(gulp.dest('./minified/vendor/html/'))
  
});

gulp.task('test', function() {
  // Be sure to return the stream
  return gulp.src([])
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});

gulp.task('default', function() {
  gulp.src([])
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'watch'
    }));
});

gulp.task('clean', function(cb) {
  del(['minified/*'], cb);
});
