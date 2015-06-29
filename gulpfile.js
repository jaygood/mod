var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', function() {
  gulp.src('app.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));

  gulp.src('public/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist/app.js'));
});
