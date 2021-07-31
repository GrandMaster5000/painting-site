"use strict";

const gulp = require("gulp");
const webpack = require("webpack-stream");
const browsersync = require("browser-sync");
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const cssmin = require('gulp-cssmin');
const concatCss = require('gulp-concat-css');

const dist = "./dist/";

gulp.task('html', function() {
  return gulp.src("src/*.html")
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest("dist/"));
});

gulp.task('styles', function () {
  return gulp.src(['./src/assets/css/main.css', './node_modules/animate.css/animate.min.css', './node_modules/swiper/swiper-bundle.min.css'])
  .pipe(cssmin())
  .pipe(concatCss('main.css'))
    .pipe(gulp.dest('dist/assets/css/'));
 });

gulp.task('bootstrap', () => {
    return gulp.src('./src/assets/css/bootstrap.css')
    .pipe(cssmin())
    .pipe(gulp.dest('dist/assets/css/'));
});

gulp.task("build-js", () => {
    return gulp.src("./src/js/main.js")
                .pipe(webpack({
                    mode: 'development',
                    output: {
                        filename: 'script.js'
                    },
                    watch: false,
                    devtool: "source-map",
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: [['@babel/preset-env', {
                                    debug: true,
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                              }
                            }
                          }
                        ]
                      }
                }))
                .pipe(gulp.dest(dist))
                .on("end", browsersync.reload);
});


gulp.task("watch", () => {
    browsersync.init({
		server: "./dist/",
		port: 4000,
		notify: true
    });
    
    gulp.watch("src/*.html").on('change', gulp.parallel('html'));
    gulp.watch("./src/assets/fonts/*.*", gulp.parallel("fonts"));
    gulp.watch("./src/assets/img/*.*", gulp.parallel("images"));
    gulp.watch("./src/assets/css/*.*", gulp.parallel("styles"));
    gulp.watch("./src/js/**/*.js", gulp.parallel("build-js"));
});

gulp.task('server', function() {
  return gulp.src("src/assets/server.php")
      .pipe(gulp.dest("dist/assets"))
      .pipe(browsersync.stream());
});

gulp.task('fonts', function() {
  return gulp.src("src/assets/fonts/**/*")
      .pipe(gulp.dest("dist/assets/fonts"))
      .pipe(browsersync.stream());
});

gulp.task('images', function() {
  return gulp.src("src/assets/img/**/*")
      .pipe(imagemin())
      .pipe(gulp.dest("dist/assets/img"))
      .pipe(browsersync.stream());
});

gulp.task("build", gulp.parallel("html",  "build-js", 'fonts', 'images', 'styles', 'server', 'bootstrap'));

gulp.task("build-prod-js", () => {
    return gulp.src("./src/js/main.js")
                .pipe(webpack({
                    mode: 'production',
                    output: {
                        filename: 'script.js'
                    },
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: [['@babel/preset-env', {
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                              }
                            }
                          }
                        ]
                      }
                }))
                .pipe(gulp.dest(dist));
});

gulp.task("default", gulp.parallel("watch", "build"));