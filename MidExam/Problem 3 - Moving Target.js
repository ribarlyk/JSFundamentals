function movingTarget(array) {
  let targets = array
    .shift()
    .split(" ")
    .map((x) => Number(x));
  for (let i = 0; i < array.length; i++) {
    let command = array[i].split(" ");
    let index = Number(command[1]);
    let value = Number(command[2]);
    if (command == "End") {
      console.log(`${targets.join("|")}`);
      break;
      
    } else if (command[0] == "Shoot") {
      if (targets.length > index && index >=0) {
        if (targets[index] - value > 0) {
          targets[index] -= value;
        } else if(targets[index] - value <=0) {
          targets.splice(i, 1);
        }
      }
    } else if (command[0] == "Add") {
      if (index > targets.length ) {
        console.log("Invalid placement!");
      } else if(targets.length > index && index >=0){
        targets[index] += value;
      }
    } else if (command[0] == "Strike") {
      if (index - value <= 0) {
        console.log("Strike missed!");
      } else if(targets.length > 1+value*2){
        let bomb = 1 + value * 2;
        targets.splice(index - value, bomb);
      }
    }
  }
}

movingTarget([
  "52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 22 3",
  "End",
  
]);
