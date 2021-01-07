var express = require('express'), http = require('http'), path = require('path');

var bodyParser = require('body-parser');
var static = require('serve-static');

var router = express.Router();

router.route('/process/login').post(function (req, res){
    
    var paramID = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;
    
    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>Express server response.</h1>');
    res.write('<div><p>paramID : ' + paramID + '</p></div>');
    res.write('<div><p>paramPassword : ' + paramPassword + '</p></div>');
    res.end();
});

var app = express();

console.log(path.join(__dirname, 'public'));

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use('/public',static(path.join(__dirname, 'public')));

app.use('/',router);
    

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express Server start port 3000');
});