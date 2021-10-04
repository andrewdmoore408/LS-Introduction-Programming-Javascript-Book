function hasNumber3(arr) {
  return (arr.includes(3) ? true: false);
}

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

console.log(hasNumber3(numbers1));
console.log(hasNumber3(numbers2));
console.log(hasNumber3(numbers3));
