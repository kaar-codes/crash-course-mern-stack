/*
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


//  ~~~~~~~~~~~~~~  Operators in JS

// Arithmetic
// Logical
// Assignment
// Comparision
// Bitwise

console.log(12 + 4 * 3 + 2 / 2); // 25
console.log(12 - 3 * 2); // 6
console.log(12 % 3);

// AND OR NOT
console.log(false && false);
console.log(false || true);
console.log(!false);

let x = 100;
x += 10; // x = x + 10;
++x;
console.log(++x);
console.log(x);

console.log(100 > 3000);
console.log(100 >= 100);

console.log(3 & 5);
console.log(3 | 5);
console.log(3 ^ 5);

console.log(!true);
console.log(!false);

//  ~~~~~~~~~~~~~~  Decision Statements
// "if" "else if" "else"
const age = prompt("Enter your age please");
if (age > 18) console.log("Age criteria got satisfied");
else if (age > 15) console.log("wait for " + (18 - age) + " years.");
else console.log("Age is not met with the criteria");

//  ~~~~~~~~~~~~~~  Looping Statements
// for Loop
for (let i = 0; i < 10; i++) {
  console.log("Hey There");
}

// for of
const obj = {
  age: 28,
  isEligible: true,
  firstName: "Logesh",
  lastName: "B",
  city: "Pondicherry",
};

const obj2 = obj;

obj2.city = "Pondy";

console.log(obj2, obj);

// [28, true, "Logesh", "B"];
for (const element of Object.keys(obj)) {
  console.log(element);
}

for (const element of [123, 45, 332, 334]) {
  console.log(element);
}
*/

//  ~~~~~~~~~~~~~~  Arrays and Objects
const scores = [3, [4, 1], "Logesh", true, 6];
const object = {
  age: 12,
  city: "Pondy",
};

// console.log(scores.at(-2));
