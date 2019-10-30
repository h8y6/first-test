// 加md5  前需要先清缓存
var gulp = require("gulp"), // gulp基础库
  rename = require("gulp-rename"), // 文件重命名
  uglify = require("gulp-uglify"), // js压缩
  htmlmin = require("gulp-htmlmin"), // html压缩
  cleancss = require("gulp-clean-css"), // css压缩
  imagemin = require("gulp-imagemin"), // 图片压缩
  watch = require('gulp-watch');//文件监听



//图片压缩
gulp.task('imagemin', done => {
    gulp.src("src/images/*") 
	.pipe(imagemin())
    .pipe(gulp.dest("dist/images"))  //放入到dist目录下面的images文件
	done();
});



// js处理
gulp.task('minifyjs', done => {
    gulp.src("./src/js/*.js") 
    // .pipe(rename({ suffix: ".min" })) //重命名
    .pipe(uglify({mangle: false//是否修改变量名
	})) //压缩
    .pipe(gulp.dest("./dist/js"))  //放入到dist目录下面的images文件
	 done();
});

// css处理
gulp.task('cleancss', done => {
    gulp.src("./src/css/**/*.css") 
	.pipe(cleancss({compatibility: 'ie8'}))
    .pipe(gulp.dest("./dist/css"))  //放入到dist目录下面的css文件
	 done();
})	


gulp.task('copyHtml', done => {
    gulp.src("src/*.html") 
	.pipe(htmlmin({ 
				removeComments: true,       // 清除HTML注释
				collapseWhitespace: true,   // 压缩HTML
				minifyJS: true,             // 压缩页面JS
				minifyCSS: true             // 压缩页面CSS
	}))
    .pipe(gulp.dest("dist"))  //把src目录中所有html格式的文件全部合并到dist目录中
    done();
});

gulp.task('default', gulp.series("minifyjs","cleancss","imagemin","copyHtml"));




// // 加md5  前需要先清缓存
// var gulp = require("gulp"), // gulp基础库
//   rename = require("gulp-rename"), // 文件重命名
//   uglify = require("gulp-uglify"), // js压缩
//   htmlmin = require("gulp-htmlmin"), // html压缩
//   cleancss = require("gulp-clean-css"), // css压缩
//   imagemin = require("gulp-imagemin"), // 图片压缩
//   watch = require('gulp-watch'),//文件监听
//   autoprefixer = require('gulp-autoprefixer'),
//   rev = require('gulp-rev'),   //- 对css、js文件名加MD5后缀
//   clean=require('gulp-clean'),//清理             
//   revCollector = require('gulp-rev-collector');   //- 路径替换



// //图片压缩
// gulp.task('imagemin', done => {
//     gulp.src("src/images/*") 
// 	.pipe(imagemin())
//     .pipe(gulp.dest("dist/images"))  //放入到dist目录下面的images文件
// 	done();
// });



// // js处理
// gulp.task('minifyjs', done => {
//     gulp.src("./src/js/*.js") 
//     .pipe(rename({ suffix: ".min" })) //重命名
//     .pipe(uglify({mangle: false//是否修改变量名
// 	})) //压缩
//     .pipe(rev())             //- 文件名加MD5后缀
//     .pipe(gulp.dest("./dist/js"))  //放入到dist目录下面的images文件
//     .pipe(rev.manifest())                       //- 生成一个rev-manifest.json
//     .pipe(gulp.dest('./rev/js'))                  //- 将rev-manifest.json保存到 rev-js 目录内
// 	 done();
// });

// // css处理
// gulp.task('cleancss', done => {
//     gulp.src("./src/css/**/*.css") 
// 	.pipe(cleancss({compatibility: 'ie8'}))
//     .pipe(rev())             //- 文件名加MD5后缀
//     .pipe(gulp.dest("./dist/css"))  //放入到dist目录下面的css文件
//     .pipe(rev.manifest())                       //- 生成一个rev-manifest.json
//     .pipe(gulp.dest('./rev/css'))                  //- 将rev-manifest.json保存到 rev-js 目录内
// 	 done();
// })	

// //路径替换任务
// gulp.task('rev', done =>{
//     gulp.src(['./rev/*/*json','./src/*.html'])
//         .pipe(revCollector())
//         .pipe(gulp.dest('./dist'));                  //- 将rev-manifest.json保存到 dist 目录内
// 	 done();
// });
// //清理文件
// gulp.task('clean', done =>{
//     gulp.src(['./dist'], {read: false})
//         .pipe(clean());                  //- 将rev-manifest.json保存到 rev-js 目录内
// 	 done();
// });


// gulp.task('copyHtml', done => {
//     gulp.src(['rev/css/*.json','rev/js/*.json',"src/*.html"]) 
// 	.pipe(revCollector({replaceReved: true}))
// 	.pipe(htmlmin({ 
// 				removeComments: true,       // 清除HTML注释
// 				collapseWhitespace: true,   // 压缩HTML
// 				minifyJS: true,             // 压缩页面JS
// 				minifyCSS: true             // 压缩页面CSS
// 	}))
//     .pipe(gulp.dest("dist"))  //把src目录中所有html格式的文件全部合并到dist目录中
//     done();
// });

// gulp.task('default', gulp.series("minifyjs","cleancss","imagemin","rev","copyHtml"));



