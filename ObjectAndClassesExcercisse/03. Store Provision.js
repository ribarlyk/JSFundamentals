function storeProvision(array, arrayTwo) {
  let obj = {};

  for (let i = 0; i < array.length; i += 2) {
    let product = array[i];
    obj[product] = Number(array[i + 1]);
  }
  for (let i = 0; i < arrayTwo.length; i += 2) {
    let product = arrayTwo[i];
    if (!obj.hasOwnProperty(product)) {
      obj[product] = Number(arrayTwo[i + 1]);
    } else {
      obj[product] += Number(arrayTwo[i + 1]);
    }
  }

  let keys = Object.keys(obj);
  let values = Object.values(obj);
  for (let i = 0;i < keys.length; i++) {
    console.log(`${keys[i]} -> ${values[i]}`);
  }
}
storeProvision(
    [
        'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
        ],
        [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
        ]
);
