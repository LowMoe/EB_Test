const gulp = require('gulp');

const sass = require('gulp-sass');

const browserSync = require('browser-sync').create();

// compile scss into css
function style(){
    // 1 Where is the scss
    return gulp.src('./app/scss/**/*.scss')
    // 2 pass that file through sass compiler
    .pipe(sass())
    // 3 where do I save the compiled css
    .pipe(gulp.dest('./app/css/'))
    // 4 stream changes to all browser
    .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server: {
            baseDir: ('./app/')
        }
    });
    gulp.watch('./app/scss/**/*.scss', style);
    gulp.watch('./app/*.html').on('change',browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;


