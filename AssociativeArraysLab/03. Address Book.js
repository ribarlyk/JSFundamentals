function adressBook(input) {
  let obj = {};
  for (let line of input) {
    let [name, adress] = line.split(":");
    obj[name] = adress;
  }
  let entries = Object.keys(obj);
  let sorted = entries.sort((a, b) => a.localeCompare(b));
  for (let names of sorted) {
    console.log(`${names} -> ${obj[names]}`);
  }
}
adressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
