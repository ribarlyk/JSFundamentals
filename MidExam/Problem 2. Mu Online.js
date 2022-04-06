function muOnline(string) {
  let health = 100;
  let bitcoin = 0;
  let comands = [...string.split("|")];
  let counterRooms = 0;

  let tempHealth = 100;

  for (let i = 0; i < comands.length; i++) {
    let token = comands[i].split(" ");

    let command = token[0];

    let value = Number(token[1]);

    if (command == "potion") {
      counterRooms++;
      if (tempHealth + value >= 100) {
        let healerFor = health - tempHealth;
        tempHealth = 100;
        console.log(`You healed for ${healerFor} hp.`);
        console.log(`Current health: ${tempHealth} hp.`);
      } else {
        tempHealth += value;
        console.log(`You healed for ${value} hp.`);
        console.log(`Current health: ${tempHealth} hp.`);
      }
    } else if (command == "chest") {
      counterRooms++;
      bitcoin += value;
      console.log(`You found ${value} bitcoins.`);
    } else {
      counterRooms++;
      tempHealth -= value;
      if (tempHealth > 0) {
        console.log(`You slayed ${command}.`);
      } else {
        console.log(`You died! Killed by ${command}.`);
        console.log(`Best room: ${counterRooms}`);
        return;
      }
    }
  }
  console.log("You've made it!");
  console.log(`Bitcoins: ${bitcoin}`);
  console.log(`Health: ${tempHealth}`);
}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
console.log('-------------')
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
