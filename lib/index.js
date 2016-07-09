/* jshint node: true */
'use strict';
var findLib = require('find');
var Promise = require('bluebird');
var slice = Array.prototype.slice;
/* from p-find */
function promisify (fn) {
  return function (pattern, root) {
    var args = slice.call(arguments);
    return new Promise(function (resolve, reject) {
      args.push(resolve);
      fn.apply(null, args).error(reject);
    });
  };
}

var find = module.exports = exports = {};
Object.keys(findLib).forEach(function (key) {
  find[key] = findLib[key];
});

// TODO: eachfile, eachdir
find.file = promisify(find.file);
find.dir = promisify(find.dir);
