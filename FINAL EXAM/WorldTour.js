function solve(input) {
  let stops = input.shift();

  for (let line of input) {
    let tokens = line.split(":");
    let comand = tokens[0];
    let inputOne = tokens[1];
    let inputTwo = tokens[2];
    if (comand == "Travel") {
      console.log(`Ready for world tour! Planned stops: ${stops}`);
    } else if (comand == "Add Stop") {
      addStop(inputOne, inputTwo);
    } else if (comand == "Remove Stop") {
      removeStop(inputOne, inputTwo);
    } else if (comand == "Switch") {
      Switch(inputOne, inputTwo);
    }
  }
  function addStop(index, string) {
    if (stops.length > 0 && index < stops.length) {
      index = Number(index);
      stops = stops.split("");
      stops.splice(index, 0, string);
      stops = stops.join("");
      console.log(stops);
    }
  }
  function removeStop(startIndex, endIndex) {
    if (
      startIndex > 0 &&
      startIndex <= stops.length &&
      endIndex > 0 &&
      endIndex <= stops.length
    ) {
      startIndex = Number(startIndex);
      endIndex = Number(endIndex);
      let indexesForDelete = endIndex - startIndex + 1;
      stops = stops.split("");
      stops.splice(startIndex, indexesForDelete);
      stops = stops.join("");
      console.log(stops);
    } else {
      console.log(stops);
    }
  }
  function Switch(oldString, newString) {
    if (stops.includes(oldString)) {
      stops = stops.replace(oldString, newString);
      if (stops.includes(oldString))
        stops = stops.replace(oldString, newString);
      console.log(stops);
    } else {
      console.log(stops);
    }
  }
}
solve([
  "Albania:Bulgaria:Cyprus:Deuchland",
  "Add Stop:3:Nigeria",
  "Remove Stop:4:8",
  "Switch:Albania: Azərbaycan",
  "Travel",
]);
