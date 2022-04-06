function Piccolo(input) {
  let parking = {};
  for (let car of input) {
    let [direction, carNumber] = car.split(", ");
    if (direction == "IN") {
      if (!parking.hasOwnProperty(carNumber)) {
        parking[carNumber] = direction;
      }
    } else if (direction === "OUT") delete parking[carNumber];
  }
  let forSort = Object.keys(parking);
  let sorted = forSort.sort((a, b) => {
    return a.localeCompare(b);
  });
  for (let el of sorted) {
    console.log(el);
  }
  if (sorted.length === 0) {
    console.log(`Parking Lot is Empty`);
  }
}
Piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
