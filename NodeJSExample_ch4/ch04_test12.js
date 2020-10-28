var fs = require('fs');

var inname='./output.txt';
var outname='./output2.txt';

fs.exists(outname, function (exists){
    if (exists){
        fs.unlink (outname, function(err){
            if(err) throw err;
            console.log ('기존파일 [' + outname + '] 삭제');
        });
    }
    var infile = fs.createReadStream('./output.txt', {flags:'r'});
    var outfile = fs.createWriteStream('./output2.txt', {flags:'w'});
    infile.pipe(outfile);
    console.log ('copy to %s -> %s', inname, outname);

});