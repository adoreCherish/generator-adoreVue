const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();
gulp.task('default', ['babel'], function() {
    gulp.watch(['./src/**/**.es', '!./src/public/scripts/*.es'], ['babel']);
});
gulp.task('babel', function() {
    return gulp.src(['./src/**/**.es', '!./src/public/scripts/*.es'])
        .pipe($.babel({
            presets: [
                "latest",
                "stage-3"
            ]
        }))
        .pipe(gulp.dest('./dist'));
})