function blaclFlag(array) {
  let days = Number(array[0]);
  let dailyPlunder = Number(array[1]);
  let expectedPlunder = Number([array[2]]);
  
  let totalPlunder = 0;
  for (let i = 1; i <= days; i++) {
    totalPlunder += dailyPlunder;
    if (i % 3 === 0) {
      totalPlunder += dailyPlunder * 0.5;
    }

    if (i % 5 === 0) {
      totalPlunder -= totalPlunder * 0.3;
    }
  }
  if (totalPlunder >= expectedPlunder) {
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
  } else {
    let percentage = (100 * totalPlunder) / expectedPlunder;
    console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
  }
}
blaclFlag(["5", "40", "100"]);
blaclFlag(["10", "20", "380"]);
