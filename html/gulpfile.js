const { src, dest, parallel, series, watch } = require("gulp");
const browserSync = require("browser-sync").create();
const concat = require("gulp-concat");
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");

function browsersync() {
  browserSync.init({
    server: { baseDir: "app/" },
    notify: false,
  });
}
function styles() {
  return src("app/scss/main.scss")
    .pipe(sass())
    .pipe(dest("app/dist/css"))
    .pipe(browserSync.stream());
}
function index() {
  return src("app/index.html")
    .pipe(dest("app/dist"))
    .pipe(browserSync.stream());
}
function images() {
  return src("app/pictures/**/*")
    .pipe(newer("app/pictures/dist/"))
    .pipe(imagemin())
    .pipe(dest("app/pictures/dist/"));
}
function images() {
  return src("app/pictures/**/*")
    .pipe(newer("app/dist/pictures/"))
    .pipe(imagemin())
    .pipe(dest("app/dist/pictures/"));
}
function startwatch() {
  watch("app/**/*.scss", styles).on("change", browserSync.reload);
  watch("app/**/*.html").on("change", browserSync.reload);
  watch("app/pictures/**/*", images);
}

exports.images = images;
exports.styles = index;
exports.styles = styles;
exports.browsersync = browsersync;
exports.default = parallel(styles, index, images, browsersync, startwatch);
