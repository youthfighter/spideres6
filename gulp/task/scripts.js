/**
 * Created by Administrator on 2017/8/12 0012.
 */
var gulp =  require("gulp"),
    babel = require("gulp-babel"),
    webpack = require("gulp-webpack"),
    config = require("../config.js");
console.log(config);
gulp.task("scripts",function(){
    gulp.src(config.scripts.src)
        .pipe(babel())
        .pipe(gulp.dest(config.scripts.temp))
        .pipe(webpack({
            output:{
                filename:"spider.js",
            },
            stats:{
                colors:true
            }
        }))
        .pipe(gulp.dest(config.scripts.dest))
});