function add(a,b,callback){
    var result = a + b;
    callback(result);
}

add(10,10, function(result){ //function(result)는 result라는 값이 나오기 전까지는 실행되지 않는다.
    console.log("callback call");
    console.log("add (10,10) result : %d", result);
})

function add2(a,b,callback) { //add2의 callback에 함수를 넣으면 해당 함수 작업이 진행된다. 그 후에 반환되는 return 값의 내용은 history의 return 값이다.
    var result = a + b;
    callback(result);
    
    var count = 0;
    var history = function() {
        count++;  //closure(클로저)로 동작하는 count
        return count + ':' + a + '+' + b + '=' + result;
    };
    
    return history;
}

var add_history = add2(10,10, function(result){ //add history에 add2라는 함수를 입력한다.
    console.log("callback call");
    console.log("add (10,10) result : %d", result);
});

console.log("add2 return value: %s", add_history());
console.log("add2 return value: %s", add_history());
console.log("add2 return value: %s", add_history());

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.walk = function(speed){
    console.log(speed + " speed walk");
}

var person1 = new Person("Courier", 20);
var person2 = new Person("Wanderer", 25);
console.log("call person1 walk 10");
person1.walk(10)
console.log("call person2 walk 20\n" + person2.walk(20)); //이건 return 값을 찾고 있지만 walk에 return이 어딨습니까 없지요.