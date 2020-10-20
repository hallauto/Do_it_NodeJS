var calc = require('./calc.js');
console.log("모듈 분리 후:%d", calc.add(10,10));
var calc2 = require('./calc2');
console.log('모듈 분리 후 - calc2:%d', calc2.add(10,10));