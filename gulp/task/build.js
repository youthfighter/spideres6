/**
 * Created by Administrator on 2017/8/12 0012.
 */
var gulp = require("gulp"),
    sequence = require("gulp-sequence"),
    config = require("../config");
gulp.task("build",sequence("clean","scripts"))