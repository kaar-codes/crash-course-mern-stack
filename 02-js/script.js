// console.log("Test Log Action takes place!");

//  ~~~~~~~~~~~~~~ Logging

console.log("Simple Text!");
console.warn("WARNING 101", "This is an example warning text");
console.error("ERROR 400", "This is an example error text");

//  ~~~~~~~~~~~~~~ Variables

console.log(c);
var c = 10;
c = "Good Morning!";

// let const

let a;
console.log(a);
a = "Hey!";

const b = undefined;
console.log(b);

//  ~~~~~~~~~~~~~~ Hoisting - Starter [TDZ - temporal dead zone]
console.log(d + 30);
var d = 100;

let e = 200;
console.log(e + 100);

//  ~~~~~~~~~~~~~~  Data types [Primitives and Non Primitives]
// Number [NaN], String, Boolean, undefined, Symbol, BigInt, null
// Array, Objects, Map, Sets [Essential Set],  etc...

const myName = "Logesh";
const myAge = 28;
const isWorking = true;

// Logesh is 28 years old and he is working.
console.log(myName + " is " + myAge + " years old and he is working.");

// COERCION - implicit way that data types get changed or mutated at the time of using it with a different data structure
console.log(100 - "200");
console.log(200 - "10" - "3" * 1 + "100"); // 187100

// CONVERSION - explicit way that data types get changed or mutated
console.log(Number("100") + Number("400"));

console.dir(new Number("2000"));
console.dir("2000" * 1);

console.log(200 > 3000);
console.log("300" > 30000);
console.log("Logesh" > 30000);

let f;
console.log(f);
