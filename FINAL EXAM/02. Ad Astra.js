function solve(input) {
  let pattern = /(\#|\|)([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(-?\d+(?:\.\d+)?)\1/g;
  let products = pattern.exec(input);
  let obj = {};

  while (products != null) {
    let line = products[2].split(/#|\|/g);
    products = pattern.exec(input);
    let product = line[0];
    let expiryDate = line[1];
    let calories = Number(line[2]);
    obj[product] = {
      expiryDate,
      calories,
    };
  }
  let prod = Object.keys(obj);
  let caloriesSum = 0;
  for (names of prod) {
    caloriesSum += obj[names].calories;
  }
  let survivingDays = Math.floor(caloriesSum / 2000);
  console.log(`You have food to last you for: ${survivingDays} days!`);
  for (names of prod) {
    console.log(
      `Item: ${names}, Best before: ${obj[names].expiryDate}, Nutrition: ${obj[names].calories}`
    );
  }
}
solve(['Hello|#Invalid food#19/03/20#450|$5*(@' ]);
