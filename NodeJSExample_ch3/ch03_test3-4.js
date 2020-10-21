//함수에 이름을 지정할 수도, 함수를 변수에 대입할 수도 있다.

function add(a, b){
    return a + b;
}

var add2 = function (a, b){
    return a + b;
}

console.log('function add: %d', add(10,10));
console.log('var add2: %d', add2(10,10));
