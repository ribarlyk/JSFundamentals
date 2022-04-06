function solve(input) {
  let obj = {};
  for (let i = 0; i < input.length; i += 2) {
    let metal = input[i];
    let quantity = input[i + 1];
    if (!obj.hasOwnProperty(metal)) {
      obj[metal] = Number(quantity);
    } else {
      obj[metal] += Number(quantity);
    }
  }
  let entries = Object.entries(obj);
  for (let line of entries) {
    console.log(`${line[0]} -> ${line[1]}`);
  }
}
solve(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
