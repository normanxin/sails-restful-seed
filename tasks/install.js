var install = require('gulp-install');

module.exports = function(gulp) {
  return function() {
    gulp.src(['./package.json'])
      .pipe(install());
  };
};
