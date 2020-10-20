var path = require('path');

var directories = ["users", "mike", "docs"];
var docsdirectory = directories.join(path.sep);
console.log('directory:%s', docsdirectory);

var curPath = path.join('/Users/mike', 'notepad.exe'); //join 후에는 각 운영체제에 맞게 seperator도 변경된다.
console.log('filePath : %s', curPath);

var filename = "C:\\users\\mike\\notepad.exe";
var dirname = path.dirname(filename);
var basename = path.basename(filename);
var extname = path.extname(filename);

console.log('directory: %s\nbasename: %s\nextname: %s', dirname, basename, extname);