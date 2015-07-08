var gulp = require('gulp');

gulp.task('install', require('./tasks/install')(gulp));
gulp.task('default', ['install']);
