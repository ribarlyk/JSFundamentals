function demo (array) {
    let names = array.shift().split(", ");
    let lostCounter = 0;
    let blackListCounter = 0; 
   let command = array.shift()
   while (command != 'Report'){
      let token = command.split(' ')
      if (token[0] == "Blacklist") {
        let name = token[1];
        if (names.includes(name) == true) {
          names[i] = "Blacklisted";
          console.log(`${name} was blacklisted.`);
          blackListCounter++;
        } else {
          console.log(`${name} was not found.`);
        }
     
      }else if (token[0] == "Error") {
        let index = Number(token[1]);
  
        if (
          index >= 0 &&
          index < names.length &&
          names[index] != "Blacklisted" &&
          names[index] != "Lost"
        ) {
          lostCounter++;
          console.log(`${names[index]} was lost due to an error.`);
          names[index] = "Lost";
        }
      }else if (token == "Change") {
        let index = Number(token[1]);
        let name = token[2];
        if (index >= 0 && index < names.length) {
          console.log(`${names[index]} changed his username to ${name}.`);
          names.splice(index, 1, name);
        }
      }
      command = array.shift()

   }
   if (command == "Report") {
    console.log(`Blacklisted names: ${blackListCounter}`);
    console.log(`Lost names: ${lostCounter}`);
    console.log(names.join(" "));
    
  }

}
demo(["Mike, John, Eddie", "Blacklist Mike", "Error 0", "Report"]);
console.log("------");
demo([
  "Mike, John, Eddie, William",
  "Error 3",
  "Error 3",
  "Change 0 Mike123",
  "Report",
]);
console.log("------");
demo([
  "Mike, John, Eddie, William",
  "Blacklist Maya",
  "Error 1",
  "Change 4 George",
  "Report",
]);