function largestNumber(arr) {
  let highest = null;

  arr.forEach(num => {
    if (num > highest || highest === null) {
      highest = num;
    }
  });

  return highest;
}

console.log(largestNumber([1, 6, 3, 2]));
console.log(largestNumber([-1, -6, -3, -2]));
console.log(largestNumber([2, 2]));

// It turns out that I could use the Math.max static method to get the highest numeric value by passing in the array as an argument to it.
