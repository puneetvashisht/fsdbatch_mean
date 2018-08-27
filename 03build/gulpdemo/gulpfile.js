const gulp = require('gulp')
const del = require('del')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')

var paths = {
    scripts: ['src/js/**/*.js']

  };
gulp.task('clean', function() {
    // You can use multiple globbing patterns as you would with `gulp.src`
    return del(['dist']);
});

gulp.task('scripts', ['clean'], function() {
    // Minify and copy all JavaScript (except vendor scripts)
    // with sourcemaps all the way down
    return gulp.src(paths.scripts)
      .pipe(concat('all.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
  });

gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['scripts']);
  });