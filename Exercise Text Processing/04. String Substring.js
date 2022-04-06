function solve(word, string) {
  let small = string.split(" ");

  for (let wasd of small) {
    let wordA = word.toLocaleLowerCase();

    if (wordA === wasd.toLocaleLowerCase()) {
      console.log(wordA);
      return;
    }
  }
  console.log(`${word} not found!`);
}
solve("python", "JavaScript is the best programming language");
