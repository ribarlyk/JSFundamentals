function solve(input) {
  let obj = {
    Move,
    Insert,
    ChangeAll,
  };
  let encMessage = input.shift();
  let = result = "";
  while (input[0] != "Decode") {
    //run a loop until Decode
    // do functions for the instructions , split by |
    //print the result
    let tokens = input.shift().split("|");
    let command = tokens[0];
    let p1 = tokens[1];
    let p2 = tokens[2];
    let commands = obj[command];
    commands(p1, p2);
  }
  function Move(letters) {
    letters = Number(letters);
    let first = encMessage.slice(0, letters);
    let last = encMessage.slice(letters);
    encMessage = last + first;

    return encMessage;
  }
  function Insert(index, value) {
    index = Number(index);
    let leftSide = encMessage.slice(0, index);
    let rightSide = encMessage.slice(index);
    encMessage = leftSide + value + rightSide;

    return encMessage;
  }
  function ChangeAll(substring, replacement) {
    encMessage = encMessage.split(substring).join(replacement);

    return encMessage;
  }

  console.log(`The decrypted message is: ${encMessage}`);
}
solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ]);
