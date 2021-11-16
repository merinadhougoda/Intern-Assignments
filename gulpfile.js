// list dependences
const gulp = require('gulp');
const { src, dest, watch, series } = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const imagewebp = require('gulp-webp');
const optimage = require('gulp-image');


//create functions 
//html
function minhtml() {
    return src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true}))
    .pipe(dest('dist'));
}

//scss
function compilescss () {
    return src('src/scss/*.scss')
    .pipe(sass())
    .pipe(prefix())
    .pipe(minify())
    .pipe(dest('dist/scss'))
}
//css
function compilecss () {
    return src('src/scss/*.css')
    .pipe(minify())
    .pipe(dest('dist/css'))

}

//Images
function optimizeimage() {
    return src('src/images/*.{jpg,png}')
    .pipe(optimage())
    .pipe(dest('dist/images'))
}

function webpImage() {
    return src('src/images/*.{jpg,png}')
    .pipe(imagewebp())
    .pipe(dest('dist/images'))
}
//create watchtask
function watchtask() {
    watch('src/scss/*.scss', compilescss);
    watch('dist/images/*.{jpg, png}', webpImage);
}

//default gulp
exports.default = series(
    minhtml,
    compilescss,
    compilecss,
    optimizeimage,
    webpImage,
    watchtask
);