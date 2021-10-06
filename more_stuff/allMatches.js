function allMatches(strings, regEx) {
  return strings.filter((string) => {
    return regEx.test(string);
  });
}

let words = [
  'laboratory', 
  'experiment', 
  'flab',
  'Pans Labyrinth', 
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/));
