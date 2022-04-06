function solve(input) {
  let words = input.split(" ");
  for (let word of words) {
    if (word.includes("#")) {
      if (word.length > 1) {
        let result = word.substring(1, word.length);

        let onlyLetters = /^[a-zA-Z\u00C0-\u00ff]+$/.test(result);
        if (onlyLetters) {
          console.log(result);
        }
      }
    }
  }
}
solve(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);
