const { series, src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

const paths = {
    scss: 'src/scss/**/*.scss',
    images: 'src/img/**/*',
    js: 'src/js/**/*.js'
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
function javaScript() {
    return src( paths.js )
        .pipe( concat('bundle.js') )
        .pipe( dest('./build/js') )
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
    watch( paths.scss, css );
    watch ( paths.js, javaScript);
}

exports.css = css;
exports.minifycss = minifycss;
exports.minImage = minImage;
exports.watchFiles = watchFiles;

exports.default = series( css, javaScript, minImage, webpVersion, watchFiles);