function hearhDelivery(array) {
  let neighborhood = array.shift().split("@").map(Number);
  let currentIndex = 0;
  let nextIndex = 0;

  for (let i = 0; i < array.length-1; i++) {
    let token = array[i].split(" ");
    let commands = token[0];
    

    if (commands == "Jump") {
      let index = token[1];
      currentIndex = Number(index);
      nextIndex += currentIndex;
      if (nextIndex >= neighborhood.length) {
        nextIndex = 0;
      }
      if (neighborhood[nextIndex] - 2 == 0) {
        console.log(`Place ${nextIndex} has Valentine's day.`);
      }
      if (neighborhood[nextIndex] == 0) {
        console.log(`Place ${nextIndex} already had Valentine's day.`);
      }
      if (neighborhood[nextIndex] > 0) {
        neighborhood[nextIndex] -= 2;
      }
    }
   
  }
  console.log(`Cupid's last position was ${nextIndex}.`);
  let sum = 0;
  for (let i = 0; i < neighborhood.length; i++) {
    sum += neighborhood[i];
    if ((sum = 0)) {
      console.log(`Mission was successful.`);
    }
  }
  let houseCount = neighborhood.filter((a) => a > 0);
  console.log(`Cupid has failed ${houseCount.length} places.`);
}

hearhDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
hearhDelivery([
  "2@4@2",
  "Jump 2",
  "Jump 2",
  "Jump 8",
  "Jump 3",
  "Jump 1",
  "Love!",
]);
