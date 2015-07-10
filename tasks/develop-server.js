module.exports = function(gulp, plugins) {
  return function() {
    plugins.developServer.listen({ path: './app.js' });
  };
};
