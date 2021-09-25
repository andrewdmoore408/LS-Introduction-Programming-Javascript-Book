function getNum (prompt) {
  let rlSync = require('readline-sync');
  return Number(rlSync.question(prompt));
}

let multiply = (a, b) => a * b;

let firstNum = getNum('Enter the first number: ');
let secondNum = getNum('Enter the second number: ');

console.log(`${firstNum} * ${secondNum} = ${multiply(firstNum, secondNum)}`);
