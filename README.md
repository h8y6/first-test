# first-test


因为没有经验，又是自己动手，所以特别乱，定个文档来捋一捋
所需要求：
	1、压缩js、css、image、html
	2、实时自动编译刷新
	3、加 md5（补充）



gulp 自动化构建
功能：1、压缩 可压缩 html、img、css、js gulp-htmlmin、gulp-imagemin、imagemin-pngquant、gulp-minify-css、gulp-cssnano、gulp-uglify gulp-concat（js 合并）
2、编译 编译 less、sass 等等 gulp-less
3、自动化 实时刷新

项目构建前置准备：
1、安装 node、检查 node 版本 node -v
2、安装 gulp（全局安装、已安装可忽略） npm install gulp –g
3、在当前项目下进行环境编译 npm init

gulp-clean-css(压缩 css 文件)
gulp-uglify(压缩 js 文件)
gulp-concat（合并文件 js、css）
gulp-rename(文件重命名)
gulp-livereload（实时自动编译刷新）
gulp-html-minify (压缩 html/jsp)
gulp-rev （加 md5 的工具）
gulp-rev-collector (根据 rev 生成的 manifest.json 文件中的映射, 去替换文件名称, 也可以替换路径)

常用插件有如下：
gulp-autoprefixer 根据设置浏览器版本自动处理浏览器前缀   不兼容display:box;  支持flex
gulp-clean：用于清理;
gulp-notify：用于打印消息文本;
gulp-rename：用于修改名字;
gulp-concat：用于合并文件;
gulp-zip：用于生成一个 zip 压缩包;
gulp-minify-css：用于压缩 css;
gulp-autoprefixer：用于给 css 添加前缀;
gulp-imagemin：用于给图片进行优化;
gulp-uglify：用于压缩 js;
amd-optimize：用于 amd 模块引用编译；
gulp-import-css：如果 css 文件是通过 import 导入的可以使用此插件进行合并优化;
gulp-rev-replace：用于替换;
gulp-useref：引入使用 build 标记，进行替换;
gulp-rev：生成 md5 文件名;
gulp-filter：对文件进行过滤;
gulp-header：压缩之后将注释写入到文件的头部
gulp-if：进行逻辑判断
gulp-size：获取文件大小
gulp-less：编译 less 文件
gulp-sass：编译 sass 文件
gulp-file-include：对文件进行引入
gulp-sourcemaps：生成 map 文件
gulp-livereload：自动刷新
gulp-clean-css：css 压缩
browser-sync：启动 server 并启动热更新
gulp-plumber : 监测工作流，报错，防止遇到错误时直接退出 gulp
gulp-rev : 文件名添加版本号
gulp-css-spritesmith：根据 css 文件自动生成雪碧图
gulp-rev-dxb、gulp-rev-collector-dxb  给文件添加版号


如果要查找 gulp 插件，一般有两个地方：

官方插件库
npm 仓库
安装完所需插件后（-s 安装），package.json 文件内容自动改变
