//Data types in JavaScript are divided into two categories:
//1. Primitive Data Types
//2. Non-Primitive Data Types

//Primitive Data Types
//1. Number
//2. String
//3. Boolean
//4. Undefined
//5. Null
//6. Symbol
//7. BigInt

const number = 10;
console.log(number); // 10
console.log(typeof number); // number

let userName = 'John';
console.log(userName); // John
console.log(typeof userName); // string

let isUser = true;
console.log(isUser); // true
let isAuthentic = false;
console.log(isAuthentic); // false
console.log(typeof isAuthentic); // boolean

let age;
console.log(age); // undefined
console.log(typeof age); // undefined

let user = null;
console.log(user); // null
console.log(typeof user); // object

const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt); // 1234567890123456789012345678901234567890n
console.log(typeof bigInt); // bigint

const id = Symbol('354');
const anotherId = Symbol('354');
console.log(id); // Symbol(354)
console.log(anotherId); // Symbol(354)
console.log(typeof id); // symbol
console.log(id.toString()); // Symbol(354)
console.log(id.description); // 354
console.log(id === anotherId); // false


//Non-Primitive Data Types
//1. Object
//2. Array
//3. Function
//4. Date
//5. RegExp
//6. Map
//7. Set
//8. WeakMap
//9. WeakSet
//10. Promise
//11. Error

const heros = ["Shaktiman", "Superman", "Batman"];
console.log(heros); // ["Shaktiman", "Superman", "Batman"]
console.log(typeof heros); // object

let herosObj = {
    hero1: "Shaktiman",
    hero2: "Superman",
    hero3: "Batman"
}   
console.log(herosObj); // { hero1: 'Shaktiman', hero2: 'Superman', hero3: 'Batman' }
console.log(typeof herosObj); // object

let greetFunction = function(){
    console.log("Hello World");
}

console.log(greetFunction); // [Function: greetFunction]
console.log(typeof greetFunction); // function