var gulp = require('gulp'),
  plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'merge-*', 'run-*', 'main-*'],
    replaceString: /\bgulp[\-.]|run[\-.]|merge[\-.]|main[\-.]/,
    camelizePluginName: true,
    lazy: true
  });

gulp.task('install', loadTask('./tasks/install'));
gulp.task('server:start', loadTask('./tasks/develop-server'));
gulp.task('default', loadTask('./tasks/default'));

function loadTask(path) {
  return require(path)(gulp, plugins);
}
