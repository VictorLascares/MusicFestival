const { series, src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

// Utilidades CSS
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

// Utilidades JS
const terser = require('gulp-terser-js');
const rename = require('gulp-rename');

const paths = {
    scss: 'src/scss/**/*.scss',
    images: 'src/img/**/*',
    js: 'src/js/**/*.js'
}

// Funcion que compila SASS
function css() {
    return src(paths.scss)
        .pipe( sourcemaps.init() )
        .pipe( sass() )
        .pipe( postcss([ autoprefixer(), cssnano() ]) )
        .pipe( sourcemaps.write('.') )
        .pipe( rename({ suffix: '.min'}) )
        .pipe( dest('./build/css') )
}
function javaScript() {
    return src( paths.js )
        .pipe( sourcemaps.init() )
        .pipe( concat('bundle.js') )
        .pipe( terser() )
        .pipe( sourcemaps.write('.') )
        .pipe( rename({ suffix: '.min'}) )
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
exports.minImage = minImage;
exports.watchFiles = watchFiles;

exports.default = series( css, javaScript, minImage, webpVersion, watchFiles);