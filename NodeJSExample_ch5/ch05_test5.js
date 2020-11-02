var http = require('http');
var fs = require('fs');

var server = http.createServer();

var host = '127.0.0.1';
var port = 3000;
server.listen(port, host, '50000', function() {
    console.log('server port: %d host: %s',port, host);
});

server.on('connection', function(socket){
    var addr = socket.address();
    console.log("client access : address: %s port: %d", addr.address, addr.port);
});

server.on('request', function(req, res) {
    console.log('client request accept');
    
	var filename = 'house.png';
	fs.readFile(filename, function(err, data) {
		res.writeHead(200, {"Content-Type": "image/png"});
		res.write(data);
		res.end();
	});
});

server.on('close', function() {
    console.log('server close');
})