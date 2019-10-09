var gulp = require("gulp");
gulp.task("default", function(a) {
  console.log("hello world");
  a();
});


gulp.task("copyHtml",function(){
    gulp.src("src/*.html") //当前目录下所有的html文件
        .pipe(gulp.dest("dist")) //文件的去处
})//dist是通过 gulp copyHtml生成的文件夹


var gulp = require("gulp");
var uglify = require("gulp-uglify");  //js压缩
var pump = require("pump");


var imagemin = require('gulp-imagemin');   图片压缩
var uglify = require("gulp-uglify");  js压缩
var less = require('gulp-less');      less
var cleanCSS = require('gulp-clean-css');  css压缩

gulp.task("compress", function(cb) {
  pump([gulp.src("src/js/*.js"), uglify(), gulp.dest("dist/js")], cb);
});

var gulp = require("gulp");
var cssnano = require("gulp-cssnano");

// 定义一个处理css文件改动的任务
gulp.task("css", function(cb) {
  gulp
    .src("src/css/*.css")
    .pipe(cssnano())
    .pipe(
      gulp.dest("dist/css"),
      cb
    );
});

var gulp = require("gulp");
var imagemin = require("gulp-imagemin");
var pngquant = require("imagemin-pngquant"); //png图片压缩插件

gulp.task("default", function() {
  return gulp
    .src("src/images/*")
    .pipe(
      imagemin({
        progressive: true,
        use: [pngquant()] //使用pngquant来压缩png图片
      })
    )
    .pipe(gulp.dest("dist/images"));
});

gulp.task("minify", function() {
  return gulp
    .src("src/pages*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist/pages"));
});
