function oddLengths(arr) { 

  return arr.reduce((memo, item) => {
    let len = item.length;
    
    if (len % 2 === 1) {
      memo.push(len);
    }

    return memo;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

console.log(oddLengths(arr));
