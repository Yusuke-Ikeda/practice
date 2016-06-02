var gulp = require("gulp");
var babel = require("gulp-babel");
var plumber = require('gulp-plumber');

gulp.task('babel', function() {
  gulp.src('./*.es6')
    .pipe(plumber())
    .pipe(babel())
    .pipe(gulp.dest('./'))
});

gulp.task('watch', function() {
  gulp.watch('./*.es6', ['babel'])
});

gulp.task('default', ['babel', 'watch']);
