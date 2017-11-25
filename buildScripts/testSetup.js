// this file is not transpiled, so must use Common JS and ES5

// register Babel to transpile before our tests run
require('babel-register')();

// disable webpack features that Mocha does not understand
require.extensions['.css'] = function (){};
