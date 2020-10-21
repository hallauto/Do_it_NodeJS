var Person = {};

Person['age'] = 20;
Person['name'] = 'ulysses';
var oper = function(a, b){
    return a+b;
};

Person.add = oper;

console.log('Person.add(10,10): %d', Person.add(10,10));