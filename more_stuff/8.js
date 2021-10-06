function isNaN(value) {
  return value !== value
}

console.log(isNaN(NaN));
console.log(isNaN(1));
console.log(isNaN(Number.INFINITY));
console.log(isNaN(Number.NaN));
