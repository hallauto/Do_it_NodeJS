process.on('exit', function() {
           console.log('exit발생');
           });
setTimeout(function() {
    console.log("2 exit");
    
    process.exit();
}, 2000)