module.exports = function(gulp, plugins) {
  return function() {
    gulp.src(['./package.json'])
      .pipe(plugins.install());
  };
};
