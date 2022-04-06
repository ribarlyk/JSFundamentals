function theLift(input) {
  let maxPeople = Number(input.shift());
  let token = input.join().split(" ");

  for (let i = 0; i < token.length; i++) {
    let currentWagon = Number(token[i]);
    if (maxPeople > 0) {
      if (currentWagon >= 0 && currentWagon <= 4) {
        let neededPeople = Math.abs(currentWagon - 4);

        if (maxPeople >= neededPeople) {
          maxPeople -= neededPeople;
          currentWagon += neededPeople;
          token[i] = currentWagon;
        } else {
          currentWagon += maxPeople;
          maxPeople = 0;
          token[i] = currentWagon;
        }
      }
    }
  }

  let trainCapacity = token.length * 4;
  let load = token.map((a) => Number(a));
  let loadNums = load.reduce((a, b) => (a += b));
  if (maxPeople <= 0) {
    if (trainCapacity > loadNums) {
      console.log(`The lift has empty spots!
            ${token.join(" ")}`);
    } else if (loadNums >= trainCapacity) {
      console.log(token.join(" "));
    }
  }
  if (maxPeople > 0) {
    if (loadNums >= trainCapacity) {
      console.log(`There isn't enough space! ${maxPeople} people in a queue!
    ${token.join(" ")}`);
    }
  }
}
theLift(["10", "0 0 0 0 0"]);

theLift(["20", "0 2 0"]);
