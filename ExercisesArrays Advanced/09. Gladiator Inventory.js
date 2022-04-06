function gladiatorInventory(array) {
  let inventory = array.shift().split(" ");
  for (let i = 0; i < array.length; i++) {
    let commands = array[i].split(" ");
    let token = commands[0];
    if (token === "Buy") {
      let includes = inventory.includes(commands[1]);
      
      if (includes == false ) {
        inventory.push(commands[1]);
      }
    } else if (token === "Trash") {
      let equipment = commands[1];
      let includes = inventory.indexOf(equipment);
      if (includes >= 0) {
        inventory.splice(includes, 1);
      }
    } else if (token === "Repair") {
      let equipment = commands[1];
      let includes = inventory.indexOf(equipment);
      if (includes >= 0) {
        let item = inventory.splice(includes, 1);
        item = item.toString();
        inventory.push(item);
      }
    } else if (token === "Upgrade") {
      let equipment = commands[1];
      let separated = equipment.split("-");
      let upgrades = separated[0];
      let includes = inventory.indexOf(upgrades);

      if (includes >= 0) {
        let whereToInsert = includes + 1;
        inventory.splice(whereToInsert, 0, `${upgrades}:${separated[1]}`);
      }
    }
  }
  console.log(inventory.join(" "));
}
gladiatorInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V'])