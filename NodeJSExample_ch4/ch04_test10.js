var output = '안녕 1!';
var buffer1 = new Buffer(10);
var len = buffer1.write(output, 'utf8');
console.log('first buffer: %s',buffer1.toString);

var buffer2 = new Buffer('안녕 2!', 'utf8');
console.log('second buffer : %s', buffer2.toString);

console.log('buffer type: %s', Buffer.isBuffer(buffer1));

var byteLen = Buffer.byteLength(output);
var str1 = buffer1.toString('utf8', 0, byteLen);
var str2 = buffer1.toString('utf8');

buffer1.copy(buffer2, 0, 0, len);
console.log ('after copy first buffer to second : %s', buffer2.toString('utf8'));

var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log('after concat first and second : %s', buffer3.toString('utf8'));