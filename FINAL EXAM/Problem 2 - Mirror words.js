function solve(input) {
  let pattern = /(@|#)(?<original>[A-Za-z]{3,})\1\1(?<mirror>[A-Za-z]{3,})\1/gm;
  let match = pattern.exec(input);
  let arr = [];
  let counter = 0;
  while (match != null) {
    counter++;
    let straight = match[2];
    let mirror = match[3];

    match = pattern.exec(input);
    arr.push(straight, mirror);
  }

  let newCounter = 0;
  let newArr = [];
  for (let i = 0; i < arr.length; i += 2) {
    let original = arr[i];
    let mirror = arr[i + 1];
    let mirrored = mirror.split("").reverse().join("");

    if (original == mirrored) {
      newCounter++;
      newArr.push(`${original} <=> ${mirror}`);
    }
  }
  if (counter == 0) {
    console.log("No word pairs found!");
  } else {
    console.log(`${counter} word pairs found!`);
  }
  if (newArr.length <= 0) {
    console.log("No mirror words!");
  } else {
    console.log("The mirror words are:");
    console.log(newArr.join(", "));
  }
}
solve([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
