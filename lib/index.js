/* jshint node: true */
'use strict';
var find = require('find');
var promisify = require('bluebird').promisify;

function nodeify (fn) {
  return function (pattern, root, callback) {
    fn
      .call(null, pattern, root, function (result) {
        callback(null, result);
      })
      .error(callback);
  };
}

exports.file = promisify(nodeify(find.file));
