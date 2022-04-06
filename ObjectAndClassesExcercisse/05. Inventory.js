function inventory(array) {
  let arrayLength = array.length;
  let hero = [];
  for (let i = 0; i < arrayLength; i++) {
    let [heroName, heroLevel, items] = array[i].split(" / ");

    let heroes = {
      heroName,
      heroLevel: Number(heroLevel),
      items,
    };
    hero.push(heroes);
  }

  hero.sort((a, b) => a.heroLevel - b.heroLevel);
  for (let element of hero) {             //Елемент е всеки обект във масива хиро
    console.log(`Hero: ${element.heroName}`);      
    console.log(`level => ${element.heroLevel}`);
    console.log(`items => ${element.items}`);
  }
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
