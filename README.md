#find

Find files or directories by name. Using promises


## Installation

```bash
$ npm install --save find-promise
```

## Examples

Find all files in current directory.

```javascript
var find = require('find-promise');

find.file(__dirname).then(function(files) {
  console.log(files.length);
})
```

Filter by regular expression.

```javascript
find.file(/\.js$/, __dirname.then(function(files) {
  console.log(files.length);
})
```

## Features
  * Recursively search each sub-directories
  * Asynchronously or synchronously
  * Filtering by regular expression or string comparing

## API

#### .file([pattern,] root, callback)

```javascript
find.file(__dirname).then(function(files) {
  //
})
```

#### .dir([pattern,] root, callback)
```javascript
find.dir(__dirname).then(function(dirs) {
  //
})
```


#### .eachfile([pattern,] root, action)

```javascript
find.eachfile(__dirname, function(file) {
  //
}).then(onEnd)
```

#### .eachdir([pattern,] root, action)

```javascript
find.eachdir(__dirname, function(dir) {
  //
}).then(onEnd)
```  

#### .fileSync([pattern,] root)
```javascript
var files = find.fileSync(__dirname);
```

#### .dirSync([pattern,] root)
```javascript
var dirs = find.dirSync(__dirname);
```



### LICENSE

(MIT Licensed)
