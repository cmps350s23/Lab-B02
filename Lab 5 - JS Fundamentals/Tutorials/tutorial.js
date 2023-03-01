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
*/

const numbers = [1, 2, 3, [[4], 5], 6];

// ADD
numbers.push(100);

console.log("PUSH", ...numbers.flat(Infinity));
