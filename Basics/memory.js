//Two type of memory in JS
//1. Stack Memory
//2. Heap Memory

//Stack Memory(Primitive Data Types/Reference Data Types)    
//Stack memory is used to store variables that are created by value.
//Stack memory is used to store primitive data types like string, number, boolean, undefined, null, symbol.
//Stack memory is used to store reference data types like object, array, function.
//Stack memory is used to store function calls.
//Stack memory is used to store execution context.
//Stack memory is used to store scope chain.
//Stack memory is used to store this keyword.
//Stack memory is used to store arguments object.
//Stack memory is used to store local variables.
//Stack memory is used to store global variables.
//Stack memory is used to store block scope variables.
//Stack memory is used to store function scope variables.
//Stack memory is used to store lexical scope variables.
//Stack memory is used to store closure scope variables.
//Stack memory is used to store private scope variables.
//Stack memory is used to store block scope variables.
//Stack memory is used to store function scope variables.
//Stack memory is used to store lexical scope variables.
//Stack memory is used to store closure scope variables.
//Stack memory is used to store private scope variables.

//Heap Memory(Non-Primitive Data Types/ non-reference data types)
//Heap memory is used to store variables that are created by reference.
//Heap memory is used to store reference data types like object, array, function.
//Heap memory is used to store object properties.
//Heap memory is used to store array elements.
//Heap memory is used to store function arguments.
//Heap memory is used to store function parameters.
//Heap memory is used to store function return values.
//Heap memory is used to store function local variables.
//Heap memory is used to store function global variables.
//Heap memory is used to store function block scope variables.
//Heap memory is used to store function function scope variables.
//Heap memory is used to store function lexical scope variables.
//Heap memory is used to store function closure scope variables.
//Heap memory is used to store function private scope variables.
//Heap memory is used to store function block scope variables.
//Heap memory is used to store function function scope variables.
//Heap memory is used to store function lexical scope variables.
//Heap memory is used to store function closure scope variables.
//Heap memory is used to store function private scope variables.


//Stack memory (Primitive Data Types / reference data types)
let name = 'Sandeep'; //String
let age = 30; //Number
let isMarried = true; //Boolean
let city = null; //Null
let country = undefined; //Undefined
let symbol = Symbol('4889998'); //Symbol

let userEmail = "sandeep@test.com"; //String
let anotherUserEmail = userEmail; //String
anotherUserEmail = anotherUserEmail //String
anotherUserEmail = "sandeep@vision.com"; //String
console.log(anotherUserEmail); //sandeep@vision.com
console.log(anotherUserEmail); //sandeep@vision.com

let userDetails = {
    name: 'Sandeep',
    age: 30,
    isMarried: true,
    city: 'Noida',
    country: 'India'
}; //Object
let anotherUserDetails = userDetails; //Object
anotherUserDetails = anotherUserDetails; //Object
anotherUserDetails.name = 'Sandeep Kumar'; //Object
anotherUserDetails.age = 35; //Object
console.log(anotherUserDetails); //{name: "Sandeep Kumar", age: 35, isMarried: true, city: "Noida", country: "India"}
console.log(userDetails); //{name: "Sandeep Kumar", age: 35, isMarried: true, city: "Noida", country: "India"}