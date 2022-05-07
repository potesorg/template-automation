var concat = require('gulp-concat');
var gulp = require('gulp');

gulp.task('compile', function () {
    return gulp.src('./parts/*.md')
        .pipe(concat('README.md'))
        .pipe(gulp.dest('./dist/'));
});
