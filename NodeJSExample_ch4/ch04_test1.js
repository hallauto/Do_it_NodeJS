var url = require('url');
var curURL = url.parse('https://www.youtube.com/results?search_query=%ED%8C%8C%EB%8F%84%EB%A3%A8');

var curStr = url.format(curURL);

console.log('url:%s', curStr);
console.dir(curURL);

var querystring = require('querystring');
var param = querystring.parse(curURL.query);

console.log('parameter query : %s', param.query); //query가 제대로 분리 안되는군요. 이유를 알아봅시다.
console.log('original param: %s', querystring.stringify(param));