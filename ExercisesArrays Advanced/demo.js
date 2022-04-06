function solve(input) {
  let rooms = input.split('|');
  let life = 100;
  let walet = 0;
  let room = 0;
  let live = true;

  let actions = {
      potion(value) {
          let currentLife = life;
          life += Number(value);
          if (life > 100) {
              console.log(`You healed for ${100 - currentLife} hp.`);
              life = 100;
          } else {
              console.log(`You healed for ${value} hp.`);
          }
          console.log(`Current health: ${life} hp.`);
      },
      chest(value) {
          console.log(`You found ${value} bitcoins.`);
          walet += Number(value);
      },
      attack(enemy, value) {
          life -= Number(value);
          if (life <= 0) {
              live = false;
              console.log(`You died! Killed by ${enemy}.`);
          } else {
              console.log(`You slayed ${enemy}.`);
          }
      }
  }
  for (const line of rooms) {
      if (!live) {
          console.log(`Best room: ${room}`);
          break;
      }
      room++;
      [comand, value] = line.split(` `);
      if (comand == `potion` || comand == `chest`) {
          actions[comand](value);
      } else {
          actions[`attack`](comand, value);
      }
  }
  if (live) {
      console.log(`You've made it!`);
      console.log(`Bitcoins: ${walet}`);
      console.log(`Health: ${life}`);
  }
}
solve(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])