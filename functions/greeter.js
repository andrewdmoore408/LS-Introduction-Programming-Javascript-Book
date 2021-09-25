let rlSync = require("readline-sync");

let getResponse = function (prompt) {
  return rlSync.question(prompt);
}

let firstName = getResponse("What is your first name? ");
let lastName = getResponse("What is your last name? ");

console.log(`Hello, ${firstName} ${lastName}!`);
