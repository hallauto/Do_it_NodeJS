var fs = require('fs');

//프로젝트 경로를 기준으로 작업들이 이루어지는 것을 확인했습니다. 이 이유를 파악해야합니다.
fs.writeFile('output.txt', 'Hello World', function(err){
    if (err) {
        console.log('err:' + err);
    }
    console.log('output.txt write end');
} );