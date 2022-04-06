function worldTour(input) {
    let trip = input.shift();
    let destination = input.shift();
 
 
    while (destination !== "Travel") {
        destination = destination.split(":");
        let findIndex = destination[1];
        let newDest = destination[2];
        let newTrip = "";
        switch (destination[0]) {
            case "Add Stop":
                findIndex = Number(findIndex);
                if (findIndex >= 0 && findIndex < trip.length) {
                    
                    newTrip = trip.slice(0, findIndex) + newDest + trip.slice(findIndex);
                    
                    console.log(newTrip);
                    trip = newTrip;
                } 
            break;
            case "Remove Stop":
                findIndex = Number(destination[1]);
                newDest = Number(destination[2]);
                if (findIndex >= 0 && findIndex < trip.length &&
                    newDest >= 0 && newDest < trip.length) {
                    
                    newTrip = trip.slice(0, findIndex) + trip.slice(newDest + 1);
                    
                    console.log(newTrip);
                    trip = newTrip;
                } 
 
            break;
            case "Switch":
                if (trip.includes(findIndex)) {
                    
                    trip = trip.replace(findIndex, newDest);
                    console.log(trip);
                }
            break
        }
 
 
        destination = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${trip}`)
}
worldTour([
    "Hawai::Cyprys-Greece",
    "Add Stop:7:Rome","Add Stop:7:Rome",
    "Remove Stop:11:16","Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel",
  ]);
  