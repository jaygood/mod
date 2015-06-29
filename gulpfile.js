var gulp = require('gulp');
var babel = require('gulp-babel');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var nodemon = require('gulp-nodemon');
var react = require('gulp-react');
var reactify = require('reactify');

gulp.task('copy', function() {
  gulp.src(['public/*.html', 'public/css/*.css'])
    .pipe(gulp.dest('dist/public'));
});

gulp.task('frontend', function() {
  return browserify({
    entries: 'public/js/main.js',
    debug: true,
    transform: [babelify]
  })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('dist/public'));
});

gulp.task('backend', function() {
  return gulp.src('app.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['backend', 'frontend', 'copy']);

gulp.task('default', ['build'], function() {
  nodemon({
    script: 'dist/app.js',
    ext: 'js',
    env: {
      'NODE_ENV': 'development',
      'PORT': 6661
    }
  })
});
