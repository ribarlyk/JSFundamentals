function solve(input) {
  let n = input.shift();
  let plants = {};
  for (let i = 0; i < n; i++) {
    let [plant, rarity] = input.shift().split("<->");
    if (!plants.hasOwnProperty(plant)) {
      plants[plant] = [+rarity];
    } else {
      plants[plant] = [+rarity];
    }
  }
  let comands = input.shift();
  while (comands != "Exhibition") {
    let token = comands.split(": ");
    let comand = token[0];
    let tokenTwo = token[1].split(" - ");
    let plant = tokenTwo[0];

    let p1 = +tokenTwo[1];
    if (comand == "Rate") {
      plants[plant].push(p1);
    }
    if (comand == "Update") {
      plants[plant][0] = p1;
    }
    if (comand == "Reset") {
      plants[plant].splice(1, plants[plant].length, 0);
    }
    comands = input.shift();
  }
  let keys = Object.keys(plants);

  console.log(`Plants for the exhibition:`);
  for (let key of keys) {
    let mid = plants[key].length - 1;
    let middle = 0;
    let final = 0;
    for (let i = 1; i <= mid; i++) {
      middle += plants[key][i];
      final = middle / mid;
    }

    console.log(
      `- ${key}; Rarity: ${plants[key][0]}; Rating: ${final.toFixed(2)}`
    );
  }
}
solve(["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"]);
