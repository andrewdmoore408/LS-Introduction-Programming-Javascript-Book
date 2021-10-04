function oddLengths(arr) {
  let lengths = arr.map(item => item.length);

  return lengths.filter(length => length % 2 === 1);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

console.log(oddLengths(arr));
