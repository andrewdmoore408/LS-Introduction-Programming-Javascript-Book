function getNumber(prompt) {
  let rlSync = require('readline-sync');

  return Number(rlSync.question(prompt));
}

function evenOrOdd() {
  let num = getNumber("Enter an integer: ");

  if (!(Number.isInteger(num))) {
    console.log("You must enter an integer!");
    return;
  }

  if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd();
