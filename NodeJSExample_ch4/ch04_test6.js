var fs = require('fs');

//파일 비동식 읽기
fs.readFile('./package.json', 'utf8', function (err,data){
    console.log(data);
});

console.log('read start');