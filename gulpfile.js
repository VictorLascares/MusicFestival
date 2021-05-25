const { series, src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

const paths = {
    scss: 'src/scss/**/*.scss',
    images: 'src/img/**/*'
}

// Funcion que compila SASS
function css() {
    return src(paths.scss)
        .pipe( sass() )
        .pipe( dest('./build/css') )
}
function minifycss() {
    return src(paths.scss)
        .pipe( sass({
            outputStyle: 'compressed'
        }) )
        .pipe( dest('./build/css') )
}
function minImage() {
    return src( paths.images )
        .pipe( imagemin() )
        .pipe( dest( './build/img' ) )
}
function webpVersion() {
    return src( paths.images )
        .pipe( webp() )
        .pipe( dest('./build/img') )
}
function watchFiles() {
    watch( paths.scss, css )
}

exports.css = css;
exports.minifycss = minifycss;
exports.minImage = minImage;
exports.watchFiles = watchFiles;

exports.default = series( css, minImage, webpVersion, watchFiles);