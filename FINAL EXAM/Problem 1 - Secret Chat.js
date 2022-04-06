function solve(input) {
  let message = input.shift();
  let line = input.shift();
  let counter = false;
  while (line != "Reveal") {
    let tokens = line.split(":|:");
    let command = tokens[0];
    let p1 = tokens[1];
    let p2 = tokens[2];
    line = input.shift();
    if (command == "InsertSpace") {
      let leftSide = message.substring(0, p1);
      let rightSide = message.substring(p1);
      message = leftSide + " " + rightSide;
      console.log(message);
    } else if (command == "Reverse") {
      if (message.includes(p1)) {
        if (counter == false) {
          let startIndex = message.indexOf(p1);
          let lastIndex = p1.length + startIndex;
          let leftside = message.substring(0, startIndex);
          let rightSide = message.substring(lastIndex);
          let forReverse = message.substring(startIndex, lastIndex);
          let reversed = forReverse.split("").reverse().join("");
          message = leftside + rightSide + reversed;
          counter = true;
          console.log(message);
        }
      } else {
        console.log("error");
      }
    } else if (command == "ChangeAll") {
      message = message.split(p1).join(p2);
      console.log(message);
    }
  }
  console.log(`You have a new text message: ${message}`);
}
solve([
  "Hiware?uiy",
  "ChangeAll:|:i:|:o",
  "Reverse:|:?uoy",
  "Reverse:|:jd",
  "InsertSpace:|:3",
  "InsertSpace:|:7",
  "Reveal",
]);
