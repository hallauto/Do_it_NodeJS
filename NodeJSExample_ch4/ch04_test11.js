var fs = require('fs');

var infile = fs.createReadStream('./output.txt', {flags:'r'});
var outfile = fs.createWriteStream('./output2.txt', {flags:'w'});

infile.on('data', function (data){
    console.log('read data: %s', data);
    outfile.write(data);
});

infile.on('end', function (){
    console.log('read end');
    outfile.end(function (){
        console.log('write end');
    });
});