function buildWall(array) {
    
    let daily = [];
    let concrete = 0;
  
    array.sort((a, b) => a - b);
    for (let i = 0; array[0] < 30; i++) {
      let blocks = array.filter((a) => a < 30);
      array = blocks.map((x) => (x += 1));
      concrete = array.length * 195;
      daily.push(concrete);
    }
    let sum = 0;
    for (let i = 0; i < daily.length; i++) {
      sum += daily[i];
    }
    let pesosSum = sum * 1900;
    console.log(daily.join(", "));
    console.log(`${pesosSum} pesos`);
  
}