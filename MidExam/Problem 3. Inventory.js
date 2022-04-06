function inventory(array) {
  let inventory = array.shift().split(", ");
  
  for (let i = 0; i < array.length; i++) {
    let token = array[i].split(" - ");
    let commands = token[0];
    let tokeno = token[1];

    if (commands == "Collect") {
      collect(tokeno);
    } else if (commands == "Drop") {
      drop(tokeno);
    } else if (commands == "Combine Items") {
      combine(tokeno);
    } else if (commands == "Renew") {
      renew(tokeno);
    }
    if (commands == "Craft!") {
      console.log(inventory.join(", "));
    }
  }
  function collect(item) {
    if (inventory.includes(item) == false)
    {
      inventory.push(item);
    }
  }
function drop(item) {
    if (inventory.includes(item) == true) 
    {
      let index = inventory.indexOf(item);
      inventory.splice(index, 1);
    }
  }
function combine(item) {
    let splitItem = item.split(":");

    let oldItem = splitItem[0];

    let newItem = splitItem[1];
if (inventory.includes(oldItem) == true) 
{
      let index = inventory.indexOf(oldItem);
      inventory.splice(index + 1, 0, newItem);
    }
}
function renew(item) {
    if (inventory.includes(item) === true) 
    {
        let index = inventory.indexOf(item);
        let spliced = inventory.splice(index, 1);
        inventory.push(spliced[0]);
    }
}
}


inventory(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);
