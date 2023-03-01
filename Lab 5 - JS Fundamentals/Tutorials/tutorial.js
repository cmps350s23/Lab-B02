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
