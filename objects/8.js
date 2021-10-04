function copyObj(toCopy, keys = null) {
  let newObj = {};

  if (keys === null) {
    return Object.assign(newObj, toCopy);
  }

  for (let k in toCopy) {
    if (keys.includes(k)) {
      newObj[k] = toCopy[k];
    }
  }

  return newObj;
}

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);
