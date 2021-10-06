function isNegativeZero(value) {
  return (5 / value) === -Infinity;
}

console.log(isNegativeZero(-0));
console.log(isNegativeZero(0));
console.log(isNegativeZero(1));
console.log(isNegativeZero(-1));
