function solve(array) {
  let startChar = array.shift().charCodeAt();

  let endChar = array.shift().charCodeAt();

  let string = array[0].split("");
  let counter = 0;
  for (char of string) {
    if (startChar < endChar) {
      if (char.charCodeAt() > startChar && char.charCodeAt() < endChar) {
        counter += char.charCodeAt();
      }
    }
    if (endChar < startChar) {
      if (char.charCodeAt() > endChar && char.charCodeAt() < startChar) {
        counter += char.charCodeAt();
      }
    }
  }
  console.log(counter);
}
solve(["a", "1", "jfe392$#@j24ui9ne#@$"]);
