function solve(input) {
  let destinations = input.shift();
  let commands = input.shift();
  while (commands != "Travel") {
    let tokens = commands.split(":");
    let comand = tokens[0];
    let p1 = tokens[1];
    let p2 = tokens[2];
    if (comand == "Add Stop") {
      let index = +p1;
      if (index >= 0 && index <= destinations.length - 1) {
        let leftSide = destinations.substring(0, index);
        let rightSide = destinations.substring(index);
        destinations = leftSide + p2 + rightSide;
      }
      console.log(destinations);
    } else if (comand == "Remove Stop") {
      let startIndex = +p1;
      let endIndex = +p2;
      let toBeRemoved = destinations.substring(startIndex, endIndex + 1);
      if (
        startIndex >= 0 &&
        startIndex <= destinations.length - 1 &&
        endIndex >= 0 &&
        endIndex <= destinations.length - 1
      ) {
        destinations = destinations.split(toBeRemoved).join("");
      }
      console.log(destinations);
    } else if (comand == "Switch") {
      let oldString = p1;

      let newString = p2;
      if (destinations.includes(oldString)) {
        destinations = destinations.split(oldString).join(newString);
      }
      console.log(destinations);
    }
    commands = input.shift();
  }
  console.log(`Ready for world tour! Planned stops: ${destinations}`);
}
solve([
  "Albania:Bulgaria:Cyprus:Deuchland",
  "Add Stop:3:Nigeria",
  "Remove Stop:1:123",
  "Switch:Albania: Azərbaycan",
  "Travel",
]);
