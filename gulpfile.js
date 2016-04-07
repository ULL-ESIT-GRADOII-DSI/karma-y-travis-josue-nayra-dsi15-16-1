var gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat');
var del     = require('del');
var minifyHTML = require('gulp-minify-html');
var cleanCSS = require('gulp-clean-css');
var karma   = require('gulp-karma');
var ghPages = require('gulp-gh-pages');
 
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
   .pipe(cleanCSS({compatibility: 'ie8'}))
   .pipe(gulp.dest('./minified/assets/css/'))
  
  //Javascript de Vendor
  gulp.src('vendor/*.js')
   .pipe(uglify())
   .pipe(gulp.dest('./minified/vendor/js/'))
   
  //CSS de Vendor
  gulp.src('vendor/*.css')
   .pipe(cleanCSS({compatibility: 'ie8'}))
   .pipe(gulp.dest('./minified/vendor/css/'))
   
  //HTML de Vendor
  gulp.src('vendor/*.html')
   .pipe(minifyHTML())
   .pipe(gulp.dest('./minified/vendor/html/'))
  
});

//Configuración de un task para el Karma.
gulp.task('test', function() {
  return gulp.src([])
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'start'
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

//Gulp deploy
gulp.task('deploy', function() {
  return gulp.src('./minified/**/*')
    .pipe(ghPages());
});

//Gulp clean
gulp.task('clean', function(cb) {
  del(['minified/*'], cb);
});
