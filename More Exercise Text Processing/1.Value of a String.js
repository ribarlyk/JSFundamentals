function solve(input) {
  let string = input.shift();
  let command = input.shift();
  let upper = 0;
  let lower = 0;
  for (letter of string) {
    if (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90) {
      upper += letter.charCodeAt();
    }

    if (letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122) {
      lower += letter.charCodeAt();
    }
  }
  if (command == "LOWERCASE") {
    console.log(`The total sum is: ${lower}`);
  } else {
    console.log(`The total sum is: ${upper}`);
  }
}

solve(["HelloFromMyAwesomePROGRAM", "LOWERCASE"]);
