function worldTour(array) {
  let start = array.shift();

  let newRoute = "";
  
  for (let i = 0; i < array.length; i++) {
    let command = array[i].split(":");
    let token = command[0];
    if (token === "Add Stop") {
      let startIndex = Number(command[1]);
      let destination = command[2];
      if (startIndex > 0 && startIndex < start.length) {
        newRoute =
          start.slice(0, startIndex) + destination + start.slice(startIndex);
          console.log(newRoute);
        }else{
            console.log(start)  
        }
    } else if (token === "Remove Stop") {
      let startIndex = Number(command[1]);
      let endIndex = Number(command[2]);
      if (
        startIndex > 0 &&
        startIndex <= start.length &&
        endIndex > 0 &&
        endIndex <= start.length
      ) {
        let asd = newRoute.slice(0, startIndex) + newRoute.slice(endIndex+1);
        newRoute = asd;
        console.log(newRoute);
    }else{
        console.log(newRoute)
    }
    } else if (token === "Switch") {
      let startIndex = command[1];
      let endIndex = command[2];
      
      if (newRoute.includes(startIndex) == true) {
        let replace = newRoute.replace(startIndex, endIndex);
        newRoute = replace;
        console.log(newRoute);
    }else{
        console.log(newRoute)
    }

    } else if (token === "Travel") {
      console.log(`Ready for world tour! Planned stops: ${newRoute}`);
      break;
    }
  }
}
worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
