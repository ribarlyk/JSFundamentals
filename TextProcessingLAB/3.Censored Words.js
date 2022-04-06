function solve(text, word) {
  let censored = text.replace(word, repeat(word));

  while (censored.includes(word)) {
    censored = censored.replace(word, repeat(word));
  }
  function repeat(word) {
    let replacer = word.length;
    return text.replace(word, "*".repeat(replacer));
  }
  console.log(repeat(word));
}
solve("A small sentence with some words", "small");
