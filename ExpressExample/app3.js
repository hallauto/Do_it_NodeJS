var express = require('express'), http = require('http')

var app = express();

app.use(function (req, res, next){
    console.log('first middleware')
    req.user = 'mike';
    res.send({name:"소녀시대", age:20});
    next();
});

app.use('/', function(req,res,next){
    console.log('second middleware')
    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.end('<h1>Express server ' + req.user + ' response.</h1>');
    
});

http.createServer(app).listen(3000, function(){
    console.log('Express Server start port 3000');
});