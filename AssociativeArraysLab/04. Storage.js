function storage(input) {
  let newMap = new Map();
  for (let line of input) {
    let [item, quantity] = line.split(" ");
    quantity = Number(quantity);
    if (!newMap.has(item)) {
      newMap.set(item, quantity);
    } else {
      let quantity1 = newMap.get(item);

      newMap.set(item, (quantity += quantity1));
    }
  }
  for (let line of newMap) {
    console.log(`${line[0]} -> ${line[1]}`);
  }
}
storage(["apple 50", "apple 61", "coffee 115", "coffee 40"]);
