function arrayManipulator(array, commands) {

  for (let command of commands) {
    let token = command.split(" ");
    let comanden = token[0];
    // console.log(comanden)
    if (comanden === "add") {
      let index = token[1];
      array.splice(index, 0, Number(token[2]));
    } else if (comanden === "addMany") {
      let index = Number(token[1]);
      token.splice(0,2)
      let numbersToAdd = token.map(Number)
      array.splice(index , 0 , ...numbersToAdd)
      
    } else if (comanden === "contains") {
      let index = Number(token[1]);
      let result = array.indexOf(index);
      console.log(result);
    } else if (comanden === "remove") {
      let index = Number(token[1]);
      array.splice(index, 1);
    } else if (comanden === "shift") {
      let index = Number(token[1]);
      for (let i = 0; i < index; i++) {
        let shiftedEl = array.shift();
        array.push(shiftedEl);
      }
    } else if (comanden === "sumPairs") {
        let arrayN = []
      if (array.length % 2 != 0) {
          array.push(0);}
        for (let i = 0; i < array.length - 1; i += 2) {
         let sum = (Number(array[i]) + Number(array[i + 1]));
        arrayN.push(sum)}
       
        array = arrayN
        }
   
     else if (comanden === "print") {
      console.log(`[ ${array.join(", ")} ]`);}}
    
  }

arrayManipulator([2, 2, 4, 2, 4],
["add 1 4", "sumPairs", "print"])