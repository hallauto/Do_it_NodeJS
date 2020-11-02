var http = require('http');

var server = http.createServer(function(req,res){
    console.log('client request accept');
    console.dir(req);
    
    res.writeHead(200, {"Contetn-Type": "text/html; charset=utf-8"});
    res.write("<!DOCTYPE html>")
    res.write("<html>")
    res.write("<head>")
    res.write("<title>response page</title>")
    res.write("</head>")
    res.write("<body>")
    res.write("<h1>nodejs response page</h1>")
    res.write("</body>")
    res.write("</html>")
    res.end();
});

var host = '127.0.0.1';
var port = 3000;
server.listen(port, host, '50000', function() {
    console.log('server port: %d host: %s',port, host);
});

server.on('connection', function(socket){
    var addr = socket.address();
    console.log("client access : address: %s port: %d", addr.address, addr.port);
});

server.on('close', function() {
    console.log('server close');
})