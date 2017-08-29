/**
 * Created by Administrator on 2017/8/12 0012.
 */
var clean = require("gulp-clean");
var gulp = require("gulp");
var config = require("../config.js");

gulp.task("clean",function(){
    return gulp.src(config.clean.src)
        .pipe(clean())
})