function manOwar(array) {
    let pirateShip = [];
    pirateShip = array.shift().split(`>`).map(Number);
    let warShip = [];
    warShip = array.shift().split(`>`).map(Number);
  let maxHealth = Number(array.shift());
  let token = array.shift();
  let isSunken = false;

  while (token != "Retire") {
    if (isSunken === true) {
      break;
    }
    let splittedToken = token.split(" ");
    let command = splittedToken[0];
    let indexOne = splittedToken[1];
    let indexTwo = splittedToken[2];
    let indexThree = splittedToken[3];

    if (command == "Fire") {
      fire(indexOne, indexTwo);
    } else if (command == "Defend") {
      defend(indexOne, indexTwo, indexThree);
    } else if (command == "Repair") {
      repair(indexOne, indexTwo);
    } else if (command == "Status") {
      Status();
    }
    token = array.shift();
  }
  if(!isSunken){
      let pirateShipSum = pirateShip.reduce((a,i) => a + i ,0);
      let warShipSum = warShip.reduce((a,i) => a+i ,0);
      console.log(`Pirate ship status: ${pirateShipSum}`)
      console.log(`Warship status: ${warShipSum}`)
  }
  function fire(index, demage) {
    index = Number(index);
    demage = Number(demage);
    if (warShip.length > index && index >= 0) {
      warShip[index] -= demage;
      if (warShip[index] <= 0) {
        isSunken = true;
        console.log("You won! The enemy ship has sunken.");
        return;
      }
    }
  }
  function defend(startIndex, endIndex, damage) {
    startIndex = Number(startIndex);
    endIndex = Number(endIndex);
    damage = Number(damage);
    if (
      (pirateShip.length > startIndex &&
      startIndex >= 0 )&&
    (startIndex <= endIndex &&
      endIndex <= pirateShip.length-1)
    ) {
      for (let j = startIndex; j <= endIndex; j++) {
        pirateShip[j] -= damage;
        if (pirateShip[j] <= 0) {
          isSunken = true;
          console.log("You lost! The pirate ship has sunken.");
          return;
        }
      }
    }
  }
  function repair(index, health) {
    index = Number(index);
    health = Number(health);
    if (pirateShip.length > index && index >= 0) {
      if (pirateShip[index] + health < maxHealth) {
        pirateShip[index] += health;
      } else {
        pirateShip[index] = maxHealth;
      }
    }
  }
  function Status() {
    let lessThan20Perc = maxHealth * 0.2;
    let coundSections = 0;
    for (let i = 0; i < pirateShip.length; i++) {
      if (pirateShip[i] < lessThan20Perc) {
        coundSections++;
      }
    }
    console.log(`${coundSections} sections need repair.`);
  }
}
manOwar([
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
console.log("------");
manOwar(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])
