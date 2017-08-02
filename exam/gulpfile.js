var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var pump = require('pump');
var uglifycss = require('gulp-uglifycss');
var svgSprite = require("gulp-svg-sprites");
var concatCss = require('gulp-concat-css');
const imagemin = require('gulp-imagemin');

//
gulp.task('min', () =>
	gulp.src('./img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'))
);


gulp.task('scripts', function() {
  return gulp.src('./js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});


gulp.task('default', function () {
  return gulp.src('css/*.css')
    .pipe(concatCss("css/all.css"))
    .pipe(gulp.dest('./'));
});

//
gulp.task('sass', function () {
  return gulp.src('./css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 //
gulp.task('sass:watch', function () {
  gulp.watch('./css/*.scss', ['sass']);
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('dist/*.js'),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});

gulp.task('css', function () {
  gulp.src('./css/*.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/'));
});


//
gulp.task('sprites', function () {
    return gulp.src('/svg/*.svg')
        .pipe(svgSprite())
        .pipe(gulp.dest("svg"));
});