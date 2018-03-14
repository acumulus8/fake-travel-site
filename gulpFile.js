//all variables are made after installing the plugins. variables contain the ability to use the plugins
const gulp = require('gulp');
const watch = require('gulp-watch');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const cssImport = require('postcss-import');

//individual tasks created
gulp.task('default', function() {
    console.log('Horray, you created a gulp task!');
});

gulp.task('html', function() {
    
});

gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
});

//main function to run in terminal: gulp watch. This runs all the individual tasks
gulp.task('watch', function() {
    watch('./app/index.html', function() {
        gulp.start('html');
    });
    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles')
    });
});