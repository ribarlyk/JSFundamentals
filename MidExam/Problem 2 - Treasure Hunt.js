function treasureHunt(array) {
  let treasureChest = array.shift().split("|");
  //console.log(treasureChest);
  for (let i = 0; i < array.length; i++) {
    let command = array[i].split(" ");
    let token = command[0];
    // console.log(token)

    if (token == "Loot") {
      for (let j = 1; j < command.length; j++) {
        let item = command[j];
        if (treasureChest.includes(item) == false) {
          treasureChest.unshift(item);
        }
      }
      //  console.log(treasureChest)
    } else if (token == "Drop") {
      let index = Number(command[1]);
      if (treasureChest.length > index && index >= 0) {
        let excluded = treasureChest.splice(index, 1).join();
        treasureChest.push(excluded);
        //  console.log(treasureChest)
      }
    } else if (token == "Steal") {
      let index = Number(command[1]);

      let stolen = treasureChest.splice(-index, index);
      console.log(stolen.join(", "));
    }
  }
  let chestLength = 0;
  let chestCount = 0;
  for (let k = 0; k < treasureChest.length; k++) {
    chestCount++;
    let chest = treasureChest[k];
    chestLength += chest.length;
  }
  let average = chestLength / chestCount;
  if (treasureChest.length > 0) {
    console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
    //console.log(treasureChest)
  } else {
    console.log("Failed treasure hunt.");
  }
}
treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);
console.log("------");
treasureHunt([
  "Diamonds|Silver|Shotgun|Gold",
 
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);
