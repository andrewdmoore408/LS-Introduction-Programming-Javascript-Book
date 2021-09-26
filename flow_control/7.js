function getString(prompt) {
  let rlSync = require('readline-sync');

  return rlSync.question(prompt);
}

function uppercaseIfOver10Characters() {
  let str = getString("Enter a string: ");

  if (str.length > 10) {
    return str.toUpperCase();
  } else {
    return str;
  }
}

console.log(uppercaseIfOver10Characters());
