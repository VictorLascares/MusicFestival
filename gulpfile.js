const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');

// Funcion que compila SASS
function css() {
    return src('src/scss/style.scss')
        .pipe( sass() )
        .pipe( dest('./build/css') )
}
function minifycss() {
    return src('src/scss/style.scss')
        .pipe( sass({
            outputStyle: 'compressed'
        }) )
        .pipe( dest('./build/css') )
}
function watchFiles() {
    watch( 'src/scss/**/*.scss', css )
}

exports.css = css;
exports.minifycss = minifycss;
exports.watchFiles = watchFiles;