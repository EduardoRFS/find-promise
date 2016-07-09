/* jshint node: true */
'use strict';
var findLib = require('find');
var Promise = require('bluebird');
var promisify = Promise.promisify;

/* from p-find */
function nodeify (fn) {
  return function (pattern, root, callback) {
    return fn
      .call(null, pattern, root, function (result) {
        callback(null, result);
      })
      .error(callback);
  };
}

var find = module.exports = exports = {};
Object.keys(findLib).forEach(function (key) {
  find[key] = findLib[key];
});

// TODO: eachfile, eachdir
find.file = promisify(nodeify(find.file));
find.dir = promisify(nodeify(find.dir));
