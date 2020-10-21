var Users = [{name:'ulysses', age:30}, {name:"courier", age:20}];

Users.push({name:"Wanderer", age:25});

var add = function (a,b) {
    return a+b;
};

Users.push(add);

console.log('Users Cnt: %d', Users.length);
console.log('first name: %s', Users[0].name);
console.log('Users %s', Users);
console.log('function add: %d', Users[3](10, 10)); // .등의 부호 없이 변수를 부르듯 부르고 바로 매개변수 표현으로 넘어간다.

for (var i = 0; i < Users.length; i++)
    {
        console.log('elements_name: %s',Users[i].name); //함수를 배열의 변수로 대입하면 이후 배열 단위로 출력할 때 함수도 이름을 통해 출력된다.
    }
Users.forEach(function (item, index){ //forEach로 부를 때는 item 만 부른다. 
        console.log('elements_age: %d', item.age); //물론 숫자 값은 아니므로 숫자 값들과 출력할 때는 NaN이 나온다.
    
});