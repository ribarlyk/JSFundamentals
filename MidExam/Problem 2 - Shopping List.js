function shoppingList(array) {
  let shopList = array.shift().split("!");
  let token = array.shift();
  while (token != "Go Shopping!") {
    let splittedToken = token.split(" ");
    let command = splittedToken[0];
    let value = splittedToken[1];
    let valueTwo = splittedToken[2];
    if (command == "Urgent") {
      if (shopList.includes(value) == false) {
        shopList.unshift(value);
      }
    } else if (command == "Unnecessary") {
      if (shopList.includes(value) == true) {
        let index = shopList.indexOf(value);
        shopList.splice(index, 1);
      }
    } else if (command == "Correct") {
      if (shopList.includes(value) == true) {
        let index = shopList.indexOf(value);
        shopList.splice(index, 1);
        shopList.splice(index, 0, valueTwo);
      }
    } else if (command == "Rearrange") {
      if (shopList.includes(value) == true) {
        let index = shopList.indexOf(value);
        let toPush = shopList.splice(index, 1);
        shopList.push(toPush[0]);
      }
    }
    token = array.shift();
  }
  console.log(shopList.join(', '));
}
shoppingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
