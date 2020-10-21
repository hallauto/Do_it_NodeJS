var Users = [{name:'ulysses', age:30}, {name:"courier", age:20}];

console.log("before Push : %d", Users.length);

Users.push({name:"Wanderer", age:25});

console.log("after Push : %d", Users.length);

Users.pop();

console.log("after pop : %d", Users.length);

var Users = [{name:'ulysses', age:30}, {name:"courier", age:20}];

console.log("before unshift : %d", Users.length);

Users.unshift({name:"Wanderer", age:25});

console.log("after unshift : %d", Users.length);

Users.shift();

console.log("after shift : %d", Users.length);

Users.unshift({name:"Wanderer", age:25});

delete Users[1]; //이렇게 delete로 지우면 지운 후에 해당 인덱스의 공간은 남는다 = 길이는 변하지 않는다.
console.log("after delete")
console.dir(Users);

Users.splice(1,0,{name:'Mojave', age:50});
console.log('add value to index 1');
console.dir(Users);

Users.splice(2,1); //이렇게 splice로 지우면 지우면서 인덱스 공간도 지워지고, 나머지 변수들이 당겨진다. = 길이가 변한다.
console.log("remove value to index 2");
console.dir(Users);

var Users2 = Users.slice(0,2); //slice와 splice를 코드 검사중에 헷갈리지 않도록 주의해야할 것 같다. 언제나 스펠링 한 글자가 버그를 좌우한다.

console.log('after slice Users2');
console.dir(Users2);

var Users3 = Users2.slice(1);
console.log('after slice Users3');
console.dir(Users3);