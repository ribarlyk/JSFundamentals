function solve(input) {
  let arr = [];
  currWorld = input[0];
  for (let i = 1; i < input.length; i++) {
    if (input[i].charCodeAt() >= 97 && input[i].charCodeAt() <= 127) {
      currWorld = currWorld.concat(input[i]);
    } else {
      arr.push(currWorld);
      currWorld = input[i];
    }
  }
  arr.push(currWorld);

  console.log(arr.join(', '));
}
solve("ThisIsSoAnnoyingToDo");
