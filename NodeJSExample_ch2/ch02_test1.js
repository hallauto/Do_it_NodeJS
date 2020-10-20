var result = 0;
console.time('duration_sum');
for (var i = 1; i <= 1000; i++){
    result += i;
}
console.timeEnd('duration_sum');
console.log('1 to 1000 sum : %d', result);
console.log('filename: %s', __filename);
console.log('filepath: %s', __dirname);
var Person = {name:"ulysses", frome:"new vegas"}
console.dir(Person);