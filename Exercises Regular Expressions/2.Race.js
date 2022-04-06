function solve(input) {
  let racers = input.shift().split(", ");

  let line = input.shift();

  let obj = {};

  while (line != "end of race") {
    let patternName = /[A-Za-z]/g;
    let name = line.match(patternName).join("");
    let patternDistance = /[0-9]/g;
    let distance = line
      .match(patternDistance)
      .join("")
      .split("")
      .map(Number)
      .reduce((a, b) => a + b);

    for (let i = 0; i < racers.length; i++) {
      if (racers[i] == name) {
        if (!obj[name]) {
          obj[name] = distance;
        } else {
          obj[name] += distance;
        }
      }
    }
    line = input.shift();
  }
  let values = Object.entries(obj);
  let sortedValues = values.sort((a, b) => b[1] - a[1]);

  console.log(`1st place: ${sortedValues[0][0]}`);
  console.log(`2nd place: ${sortedValues[1][0]}`);
  console.log(`3rd place: ${sortedValues[2][0]}`);
}
solve([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
