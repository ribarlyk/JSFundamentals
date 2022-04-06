function solve(input) {
  let obj = {};
  for (let lines of input) {
    let [company, employee] = lines.split(" -> ");
    if (obj.hasOwnProperty(company) == false) {
      obj[company] = [];
      obj[company].push(employee);
    } else {
      if (!obj[company].includes(employee)) obj[company].push(employee);
    }
  }
  let entries = Object.keys(obj).sort((a, b) => a.localeCompare(b));

  for (line of entries) {
    console.log(`${line}\n-- ${obj[line].join("\n-- ")}`);
  }
}
solve([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
