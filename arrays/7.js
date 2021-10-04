function sumOfSquares(arr) {
  return arr.reduce((memo, num) => {
    return (num * num) + memo;
  }, 0);
}

let array = [3, 5, 7];

console.log(sumOfSquares(array));
