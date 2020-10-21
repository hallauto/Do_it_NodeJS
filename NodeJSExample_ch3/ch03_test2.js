var Person = {};

Person['age'] = 20;
Person['name'] = 'ulysses';
Person.mobile = "010-1234-5678";

console.log('age: %d', Person.age);
console.log('name: %s', Person.name);
console.log('mobile: %s', Person['mobile']); //대괄호를 써도, .을 통해서 써도 동일하게 호출 가능하다.
