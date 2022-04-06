function meetings(input) {
  let obj = {};
  for (let line of input) {
    let [day, name] = line.split(" ");
    if (!obj.hasOwnProperty(day)) {
      obj[day] = name;
      console.log(`Scheduled for ${day}`);
    } else {
      console.log(`Conflict on ${day}!`);
    }
  }
  let entries = Object.entries(obj);
  for (let line of entries) {
    console.log(`${line[0]} -> ${line[1]}`);
  }
}
meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
