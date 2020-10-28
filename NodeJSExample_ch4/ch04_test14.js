var fs = require('fs');
fs.mkdir('./docs', 0666, function(err){
    if(err) throw err;
    console.log ('new docs');
    fs.rmdir('./docs', function (err){
        if(err) throw err;
        console.log ('remove docs');
    });
});

//판단되는 것은 node_modules의 상위 디렉토리가 working directory로 설정된다는 예상이 존재합니다.
