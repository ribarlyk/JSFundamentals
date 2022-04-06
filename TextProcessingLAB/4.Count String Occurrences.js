function solve(input, word) {
  let counter = 0;
  let array = input.split(" ");
  for (let word1 of array) {
    if (word1 === word) {
      counter++;
    }
  }
  console.log(counter);
}
solve("This is a word and it also is a sentence", "is");
