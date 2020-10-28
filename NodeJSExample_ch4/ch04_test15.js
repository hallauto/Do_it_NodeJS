var winston = require('winston');    				// 로그 처리 모듈
var winstonDaily = require('winston-daily-rotate-file');    	// 로그 일별 처리 모듈
var moment = require('moment');    				// 시간 처리 모듈

function timeStampFormat() {
    return moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ'); // '2016-05-01 20:14:28.500 +0900'
};

//winston이 3.0을 넘어 업그레이드 되면서 많은 형식이 달라졌습니다. 아래 항목의 주석을 유념하고 확인하시기 바랍니다.
var logger = winston.createLogger({ //기존의 new winston.Logger는 더이상 사용되지 않습니다.
    transports: [
        new (winstonDaily)({
            name: 'info-file',
            filename: './log/server%DATE%.log',  //filename에서 datePattern이 어디에 들어가는지 명시해야합니다. 명시하지 않으면 무조건 filename 뒤에 날짜형식이 붙게 됩니다.
            datePattern: '_YYYY-MM-DD', //날짜 형식만을 입력해야합니다.
            colorize: false,
            maxsize: 50000000,
            maxFiles: 1000,
            level: 'info',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        }),
        new (winston.transports.Console)({
            name: 'debug-console',
            colorize: true,
            level: 'debug',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        })
    ],
    exceptionHandlers: [
        new (winstonDaily)({
            name: 'exception-file',
            filename: './log/exception%DATE%.log',
            datePattern: '_YYYY-MM-DD',
            colorize: false,
            maxsize: 50000000,
            maxFiles: 1000,
            level: 'error',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        }),
        new (winston.transports.Console)({
            name: 'exception-console',
            colorize: true,
            level: 'debug',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        })
    ]
});



var fs = require('fs');

var inname = './output.txt';
var outname = './output2.txt';

fs.exists(outname, function (exists) {
    if (exists) {
    	fs.unlink(outname, function (err) {
    		if (err) throw err;
    		logger.info('기존 파일 [' + outname +'] 삭제함.');
    	});
    }
    
    var infile = fs.createReadStream(inname, {flags: 'r'} );
	var outfile = fs.createWriteStream(outname, {flags: 'w'});

	infile.pipe(outfile);
	logger.info('파일 복사 [' + inname + '] -> [' + outname + ']');
});