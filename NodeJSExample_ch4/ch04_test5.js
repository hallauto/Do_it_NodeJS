var fs = require('fs');

// 파일을 동기식 IO로 읽습니다.
var data = fs.readFileSync('./package.json','utf8');

console.log(data);