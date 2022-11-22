import gulp from "gulp";
import babel from "gulp-babel";
import debug from "gulp-debug"; //동작하면 메세지 띄워주는 것.(표시만) - 어떤것들이 됐는지 알려는 단순의도
import del from "del"; //파일지우기
import gulp_sass from "gulp-sass";
import node_sass from "sass";
import autoPrefixer from "gulp-autoprefixer"; //낮은버전css
import sourcemaps from "gulp-sourcemaps"; //**concat으로 묶었떤 것들을 다 풀어 보여주는 것. 경로 파일 등(로컬은 필요, build 불필요)
import concat from "gulp-concat"; //소스 모아주는 것
import image from "gulp-image"; //이미지 용량 압축 (로컬은 필요 없고, build하여 나갈때만 필요)
import fileinclude from "gulp-file-include";
import changed from "gulp-changed"; //파일변경된 것 감지
import { htmlValidator } from 'gulp-w3c-html-validator'; //build 유효성 검사 (로컬은 필요 없고, build하여 나갈때만 필요)
import browserSync from "browser-sync";
import inquirer from "inquirer";

const sass = gulp_sass(node_sass);

const routes = {
    html: {
        watch: "src/**/*.html",
        src: "src/html/**/*.html",
        include: "src/html/include/*",
        dest: "build/"
    },
    imgs: {
        src: "src/imgs/**/*",
        dest: "build/imgs"
    },
    scss: {
        watch: "src/scss/**/*.scss",
        src: "src/scss/style.scss",
        dest: "build/css"
    },
    js: {
        watch: "src/js/*.js",
        src: "src/js/*.js",
        dest: "build/js"
    }
}

const ghtml = () => gulp
    .src([
        routes.html.src, "!" + routes.html.include
    ])
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
    }))
    .pipe(debug({title: 'debug html:'}))
    .pipe(changed(routes.html.src))
    .pipe(gulp.dest(routes.html.dest));

const gimgs = () => gulp
    .src(routes.imgs.src)
    .pipe(image())
    .pipe(gulp.dest(routes.imgs.dest));

const gscss = () => gulp
    .src(routes.scss.src, { sourcemaps: true })
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoPrefixer())
    .pipe(debug({title: 'debug scss:'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(routes.scss.dest), { sourcemaps: true });

const gjs = () => gulp
    .src(routes.js.src)
    .pipe(babel())
    .pipe(concat("util.js"))
    .pipe(debug({title: 'debug js:'}))
    .pipe(gulp.dest(routes.js.dest));

const validateHtml = () => gulp
    .src([
        routes.html.src, "!" + routes.html.include
    ])
    .pipe(htmlValidator.analyzer({ ignoreMessages: /^Duplicate ID/ }))
    .pipe(htmlValidator.reporter());

const gbrowserSync = () =>
    browserSync.init({
        port: 4000,
        watch: true,
        startPath: 'index.html',
        server: {
            baseDir: 'build/',
            directory: true,
        }
    });

const watch = () => {
    gulp.watch(routes.html.watch, ghtml);
    gulp.watch(routes.imgs.src, gimgs);
    gulp.watch(routes.scss.watch, gscss);
    gulp.watch(routes.js.watch, gjs);
};

const clean = () => del(["build/"]);

const prepare = gulp.series([clean, gimgs]);
const assets = gulp.series([ghtml, gscss, gjs, validateHtml]);
const live = gulp.parallel([gbrowserSync, watch]);

export const dev = gulp.series([prepare, assets, live]);
export const devClean = gulp.series([clean]);