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
    var infile = fs.createReadStream(filename, {flags:'r'});
    var filelength = 0;
    var curlength = 0;
    
    fs.stat(filename, function(err, stats){
        filelength = stats.size;
    });
    
    res.writeHead(200, {"Content-Type": "image/png"});
    
    infile.on('readable', function () {
       var chunk;
        while (null != (chunk = infile.read())){
            console.log("read byte", chunk.length);
            curlength += chunk.length;
            res.write(chunk, 'utf8', function (err){
                console.log('file write end : %d file size: %d', curlength, filelength);
                if (curlength >= filelength)
                    res.end();
            })
        }
    });
    
    infile.pipe(res);
});

server.on('close', function() {
    console.log('server close');
})