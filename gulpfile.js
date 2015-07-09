var gulp = require('gulp');

gulp.task('install', require('./tasks/install')(gulp));
gulp.task('server:start', require('./tasks/develop-server')(gulp));
gulp.task('default');
