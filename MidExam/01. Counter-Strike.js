function cS(array) {
  let health = Number(array.shift());
  let winsCounter = 0;

  for (let commands of array) {

    if (commands == "End of battle") {
        console.log(`Won battles: ${winsCounter}. Energy left: ${health}`)
        return}
        let energy = Number(commands)
      if (health >= Number(energy)) {
        winsCounter++;
        health -= Number(energy);
        if (winsCounter % 3 == 0) {
          health += winsCounter;
        }} else  {
          console.log(
            `Not enough energy! Game ends with ${winsCounter} won battles and ${health} energy`
          );
          return;
        }
      
     
  }
}
cS(["100", "10", "10", "10", "1", "2", "3", "1", "2", "3", "3", "73", "10"]);
console.log("-------");
cS(["200", "54", "14", "28", "13", "End of battle"]);
