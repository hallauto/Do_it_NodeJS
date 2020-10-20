var calc = {};
calc.add = function(a,b){
    return a + b;
}

console.log("모듈 분리 전 : %d", calc.add(10,10));