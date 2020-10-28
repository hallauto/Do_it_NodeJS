process.on('tick', function(count) {
    console.log("tick 이벤트 발생 %d", count);
});

setTimeout(function (){
    console.log("2 tick");
    process.emit('tick', '2');
}, 2000);