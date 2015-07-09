var server = require( 'gulp-develop-server' );

module.exports = function(gulp) {
  return function() {
    server.listen( { path: './app.js' } );
  };
};
