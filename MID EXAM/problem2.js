function prbolem2(array) {
  let names = array.shift().split(", ");
  let lostCounter = 0;
  let blackListCounter = 0;

  for (let i = 0; i < array.length; i++) {
    let command = array[i].split(" ");
    let token = command[0];
    if (token == "Blacklist") {
      let name = command[1];
        if (names.includes(name) == true) {
        let index = names.indexOf(name)
        names[index] = "Blacklisted";
        console.log(`${name} was blacklisted.`);
        blackListCounter++;
    } else {
        console.log(`${name} was not found.`);
    }
    }else if (token == "Error") {
      let index = Number(command[1]);
      if (index >= 0 &&index < names.length &&names[index] != "Blacklisted" && names[index] != "Lost") 
      {
        lostCounter++;
        console.log(`${names[index]} was lost due to an error.`);
        names[index] = "Lost";
      }
    } else if (token == "Change") {
      let index = Number(command[1]);
      let name = command[2];
      if (index >= 0 && index < names.length) {
        console.log(`${names[index]} changed his username to ${name}.`);
        names.splice(index, 1, name);
      }
    }
    if (token == "Report") {
      console.log(`Blacklisted names: ${blackListCounter}`);
      console.log(`Lost names: ${lostCounter}`);
      console.log(names.join(" "));
      break;
    }
  }
}
prbolem2(["Mike, John, Eddie", "Blacklist Mike", "Error 0", "Report"]);
console.log("------");
prbolem2([
  "Mike, John, Eddie, William",
  "Error 3",
  "Error 3",
  "Change 0 Mike123",
  "Report",
]);
console.log("------");
prbolem2([
  "Mike, John, Eddie, William",
  "Blacklist Maya",
  "Error 1",
  "Change 4 George",
  "Report",
]);
