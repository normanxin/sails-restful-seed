module.exports = function(gulp, plugins) {
  return function() {
    plugins.sequence('install', 'server:start');
  };
};
