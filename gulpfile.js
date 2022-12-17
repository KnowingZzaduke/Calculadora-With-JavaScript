const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

//Functions
function css(done){
    src("src/scss/**/*.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(dest("build/css"));
    done();
};

function dev(done){
    watch("src/scss/**/*.scss", css);
    done();
};

//Calling taks
exports.css = css;
exports.dev = dev;
