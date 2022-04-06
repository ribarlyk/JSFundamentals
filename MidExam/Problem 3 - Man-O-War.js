function manOWar(array) {
  let pirateShip = array.shift().split(">").map(Number);

  let warShip = array.shift().split(">").map(Number);
  let maxHealth = Number(array.shift());

  let needRepairCounter = 0;
  let token = "";
  for (let i = 0; i < array.length; i++) {
    let command = array[i].split(" ");
    token = command[0];

    if (token == "Fire") {
      let index = Number(command[1]);
      let damage = Number(command[2]);
      if (warShip.length > index && index >= 0) {
        warShip[index] -= damage;
        if (warShip[index] < 0) {
          console.log("You won! The enemy ship has sunken.");
          return;
        }
      }
    } else if (token == "Defend") {
      let startIndex = Number(command[1]);
      let endIndex = Number(command[2]);
      let damage = Number(command[3]);
      if (
        pirateShip.length > startIndex &&
        pirateShip.length > endIndex &&
        startIndex >= 0 &&
        endIndex >= 0
      ) {
        

        for (let k = startIndex; k <= endIndex; k++) {
          pirateShip[k]-=damage
           if(pirateShip[k]<0){
            console.log("You lost! The pirate ship has sunken.");
            return;
           
          }
        }
      }
    } else if (token == "Repair") {
      let index = Number(command[1]);
      let health = Number(command[2]);
      pirateShip = pirateShip.map(Number);
      if (warShip.length > index && index >= 0) {
        if (pirateShip[index] + health <= maxHealth) {
          pirateShip[index] += health;
        } else {
          pirateShip[index] = maxHealth;
        }
      }
    } else if (token == "Status") {
      let needRepair = maxHealth * 0.2;

      for (let i = 0; i < pirateShip.length; i++) {
        if (pirateShip[i] < needRepair) {
          needRepairCounter++;
        }
      }
      console.log(`${needRepairCounter} sections need repair.`);
    }
  }

  let pirateSum = 0;
  let warShipSum = 0;
  for (let k = 0; k < pirateShip.length; k++) {
    pirateSum += pirateShip[k];
  }
  for (let l = 0; l < warShip.length; l++) {
    warShipSum += warShip[l];
  }
  console.log(`Pirate ship status: ${pirateSum}`);
  console.log(`Warship status: ${warShipSum}`);
  if (token == "Retire") {
    return;
  }
}
manOWar([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire",
]);
console.log("--------");
manOWar([
  "2>3>4>5>2",
  "6>7>8>9>10>11",
  "20",
  "Status",
  "Fire 2 3",
  "Defend 0 4 11",
  "Repair 3 18",
  "Retire",
]);
