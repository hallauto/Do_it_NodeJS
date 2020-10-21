var Person = {};

Person['age'] = 20;
Person['name'] = 'ulysses';
Person.add = function(a, b){
    return a+b;
};

console.log('Person.add(10,10): %d', Person.add(10,10));