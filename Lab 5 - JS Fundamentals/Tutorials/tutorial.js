//
/*
    1. node --watch t+TAB
    2. Win CTRL + C
    3. MAC CTRL + Z
    4. npm i --save prompt-sync

import PromptSync from "prompt-sync";
const prompt = PromptSync();
const name = prompt("What is your name? ");

console.log("Welcome to JS");
console.log("Mr. ", name);

const a = 10;
let b = 20;
var c = 100;

if (true) {
  c = 50;
  b = 100;
}

console.log(a, b, c);


const person = {
  name: "Abdulahi",
  age: 120,
  gender: "M",
  toString: function () {
    return this.name + " " + this.age + " " + this.gender;
  },
  allowed: function () {
    return this.age > 18;
  },
};

console.log(person.name);
console.log(person.age);
console.log(person.gender);
console.log(person.toString());
console.log(person.allowed());

// arrays

const numbers = [1, 2, [3, 4], 5, 6, "Abdulhi", [1, 2, 3], person];

numbers[0] = 1000;

console.log(numbers);


const flatNum = [1, [2, 3], 4, 5];
const numbers = [1, 2, 3, 4, 5];
console.log("BEFORE FLAT", flatNum);
console.log("FLAT", flatNum.flat(Infinity));
// ADD

console.log("\nORIGINAL", numbers);

numbers.push(100);
console.log("\nPUSH", numbers);

numbers.pop();
console.log("\nPOP", numbers);

const sliced = numbers.slice(2, 4);
console.log("\nSLICE", sliced);
console.log("\nORIGINAL NOT AFFECTED [SLICE]", numbers);

const spliced = numbers.splice(2, 1, 55, 66, 88, 99);
console.log("\nSLICE", spliced);
console.log("\nORIGINAL AFFECTED [SPLICED]", numbers);


const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// Where we want to reach

// numbers.forEach((a) => console.log(a));
// console.log(
//   "Sum",
//   numbers.reduce((a, b) => a + b)
// );


function add(a, b) {
  return a + b;
}

const add2 = function (a, b) {
  return a + b;
};

function display(v) {
  console.log(v);
}
function display2(v) {
  console.log("The value is ", v);
}
function addAndDisplay(a, b, dis) {
  const result = a + b;
  dis(result);
}
const a = 10;
const c = 20;
const d = 55;

console.log(add(a, c));
console.log(add2(a, 20));
console.log("\nAfter calling the addAndDisplay");
addAndDisplay(a, 20, display);
addAndDisplay(a, 20, display2);


function calculator(a, b, opt) {
  const result = opt(a, b);
  console.log(result);
}

const add = function (a, b) {
  return a + b;
};

const sub = function (a, b) {
  return a - b;
};

const div = function (a, b) {
  return a / b;
};
calculator(a, 20, add);
calculator(110, 20, sub);
calculator(110, 20, div);


// const isEven = function (v) {
//   return v % 2 == 0;
// };
// const isOdd = function (v) {
//   return v % 2 != 0;
// };

// const isNeg = function (v) {
//   return v < 0;
// };

// a = 10;
// isEven(10);
// isEven(a);

function filterItems(numbers, filter) {
  const result = [];
  for (const num of numbers) {
    if (filter(num)) result.push(num);
  }

  return result;
}
const numbers = [1, 2, 3, 4, -4, -5, 3, 0];
console.log(filterItems(numbers, (v) => v % 2 == 0));
console.log(filterItems(numbers, (v) => v % 2 != 0));
console.log(filterItems(numbers, (v) => v < 0));

function square(x) {
  return x ** 2;
}
function add(x, y) {
  return x + y;
}
//Arrow
const square2 = (x) => x ** 2;

console.log(square2(22));
*/

const numbers = [1, 2, 3, -4, -5, -6, 1, -5];

numbers.forEach((d) => console.log("=> ", d));
const squaredNumbers = numbers.map((x) => x ** 3);
const negNumbers = numbers.filter((x) => x < 0);
const foundNumber = numbers.find((x) => x == -5);
const foundIndex = numbers.findIndex((x) => x == 1);
const sum = [1, 2, 3, 4].reduce((a, b) => a * b, 1);
const max = [-1, 26, 88, 14].reduce((acc, curr) => (acc > curr ? acc : curr));

console.log(squaredNumbers);
console.log(numbers);
console.log(negNumbers);
console.log(foundNumber);
console.log(foundIndex);

console.log(numbers[foundIndex]);
numbers.splice(foundIndex, 1);
console.log(numbers);
console.log(sum);
console.log(max);

mul = num[0];
for (const n of numbers) {
  mul *= n;
}
